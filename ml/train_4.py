# https://huggingface.co/docs/transformers/main/en/tasks/sequence_classification

import numpy as np
import datasets
import evaluate
from transformers import DataCollatorWithPadding
from transformers import TrainingArguments, Trainer
from transformers import AutoTokenizer
from transformers import AutoModelForSequenceClassification

path = 'Shunian/kaggle-mbti-cleaned'
dataset = datasets.load_dataset(path)

mbti = np.array(
    [[1, 0, 0, 0], [1, 0, 1, 0], [1, 1, 1, 0], [1, 1, 0, 0],
     [1, 0, 0, 1], [1, 0, 1, 1], [1, 1, 1, 1], [1, 1, 0, 1],
     [0, 0, 0, 1], [0, 0, 1, 1], [0, 1, 1, 1], [0, 1, 0, 1],
     [0, 0, 0, 0], [0, 0, 1, 0], [0, 1, 1, 0], [0, 1, 0, 0],],
    dtype=float
)
def label(data):
    return {'labels': mbti[data['label']]}

# replace the int label column with one-hot encoding
dataset = dataset.map(label, batched=True, remove_columns='label')

tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased")
def tokenize(data):
    return tokenizer(data["text"], truncation=True)

# tokenize the text column
dataset = dataset.map(tokenize, batched=True)

data_collator = DataCollatorWithPadding(tokenizer=tokenizer)

accuracy = evaluate.load("accuracy")
def compute_metrics(eval_pred):
    pred, labels = eval_pred
    pred = pred >= 0.5
    pred = pred.dot(1 << np.arange(4))
    labels = labels.dot(1 << np.arange(4))
    return accuracy.compute(predictions=pred, references=labels)

id2label = {
    0: 'ISTJ', 1: 'ISFJ', 2: 'INFJ', 3: 'INTJ',
    4: 'ISTP', 5: 'ISFP', 6: 'INFP', 7: 'INTP',
    8: 'ESTP', 9: 'ESFP', 10: 'ENFP', 11: 'ENTP',
    12: 'ESTJ', 13: 'ESFJ', 14: 'ENFJ', 15: 'ENTJ'
}
label2id = {
    'ISTJ': 0, 'ISFJ': 1, 'INFJ': 2, 'INTJ': 3,
    'ISTP': 4, 'ISFP': 5, 'INFP': 6, 'INTP': 7,
    'ESTP': 8, 'ESFP': 9, 'ENFP': 10, 'ENTP': 11,
    'ESTJ': 12, 'ESFJ': 13, 'ENFJ': 14, 'ENTJ': 15
}

model = AutoModelForSequenceClassification.from_pretrained(
    "distilbert-base-uncased", num_labels=4, problem_type="multi_label_classification"
)

training_args = TrainingArguments(
    output_dir="model_4",
    learning_rate=2e-5,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=16,
    num_train_epochs=4,
    weight_decay=0.01,
    evaluation_strategy="epoch",
    save_strategy="epoch",
    load_best_model_at_end=True,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=dataset["train"],
    eval_dataset=dataset["test"],
    tokenizer=tokenizer,
    data_collator=data_collator,
    compute_metrics=compute_metrics,
)

trainer.train()
