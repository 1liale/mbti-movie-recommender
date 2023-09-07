<script lang='ts'>
	import type { GalleryComponentProps, GalleryItem } from './Gallery.types';
    import { flip } from 'svelte/animate';

    interface $$Props extends GalleryComponentProps {}

    export let isHidden: boolean = false;
    export let customClass: string | undefined = '';
    export let customStyle: string | undefined = '';

    export let items: GalleryItem[] = [];

    const init = (node: HTMLElement) => {
        if (getComputedStyle(node).gap === 'normal') node.style.gap = 'inherit';
    }

    let draggingItem: GalleryItem;
    let animatingItems: Set<GalleryItem> = new Set();
    const dragDuration: number = 300;

    // Allows D&D swap action between items when one is dragged hovering over another
    const swapItems = (item: GalleryItem) => {
        if (draggingItem === item || animatingItems.has(item)) return;
        animatingItems.add(item);

        const firstItemInd = items.indexOf(draggingItem);
        const secondItemInd = items.indexOf(item);

        items[firstItemInd] = item;
        items[secondItemInd] = draggingItem;
        setTimeout(() => animatingItems.delete(item), dragDuration);
    }
</script>

{#if !isHidden} 
    <slot name="filter-bar" />
    <div style={customStyle} class="grid {customClass}" use:init>
        {#each items as item, i (item)}
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div id={'gallery-item' + i}
                animate:flip={{ duration: dragDuration }}
			    class="item"
			    draggable="true"
			    on:dragstart={() => draggingItem = item}
			    on:dragend={() => draggingItem = undefined}
		        on:dragenter={() => swapItems(item)}
			    on:dragover|preventDefault>
                <svelte:component this={item?.component} {...item?.props} />
            </div>
        {:else}
            <!-- Pass children component if items is not specified -->
            <slot /> 
        {/each}
    </div>
{/if}