
import { Component, OnInit, OnDestroy, Input, Output, ElementRef, EventEmitter, } from '@angular/core';
import { MasonryOptions } from './masonry-options';

declare var require: any;
declare var imagesLoaded: any;

// import * as masonry from node_modules 'masonry-layout';
let masonry = require('masonry-layout');


@Component({
    selector: '[masonry], masonry',
    template: '<ng-content></ng-content>'
})
export class AngularMasonry implements OnInit, OnDestroy {

    public msnry: any;
    // private _imagesLoaded = null;

    // Inputs
    @Input() public options: MasonryOptions;
    @Input() public useImagesLoaded: Boolean = false;

    // Outputs
    @Output() layoutComplete: EventEmitter<any[]> = new EventEmitter<any[]>();
    @Output() removeComplete: EventEmitter<any[]> = new EventEmitter<any[]>();

    constructor(private element: ElementRef) { }



    ngOnInit() {
        ///TODO: How to load imagesloaded only if this.useImagesLoaded===true?
        // if (this.useImagesLoaded) {
        //     this._imagesLoaded = require('imagesloaded');
        // }

        // Create masonry options object
        if (!this.options) {
            this.options = {};
        }

        // Set default itemSelector
        if (!this.options.itemSelector) {
            this.options.itemSelector = '[masonry-brick], masonry-brick';
        }

        // Set element display to block
        if (this.element.nativeElement.tagName === 'MASONRY') {
            this.element.nativeElement.style.display = 'block';
        }

        // Initialize Masonry
        this.msnry = new masonry(this.element.nativeElement, this.options);

        // console.log('AngularMasonry:', 'Initialized');

        // Bind to events
        this.msnry.on('layoutComplete', (items: any) => {
            this.layoutComplete.emit(items);
        });
        this.msnry.on('removeComplete', (items: any) => {
            this.removeComplete.emit(items);
        });
    }

    ngOnDestroy() {
        if (this.msnry) {
            this.msnry.destroy();
        }
    }

    public layout() {
        setTimeout(() => {
            this.msnry.layout();
        });

        // console.log('AngularMasonry:', 'Layout');
    }

    // public add(element: HTMLElement, prepend: boolean = false) {
    public add(element: HTMLElement) {

        let isFirstItem = false;

        // Check if first item
        if (this.msnry.items.length === 0) {
            isFirstItem = true;
        }

        if (this.useImagesLoaded) {
            imagesLoaded(element, (instance: any) => {
                this.element.nativeElement.appendChild(element);

                // Tell Masonry that a child element has been added
                this.msnry.appended(element);

                // layout if first item
                if (isFirstItem) {
                    this.layout();
                }
            });

            this.element.nativeElement.removeChild(element);
        }
        else {

            // Tell Masonry that a child element has been added
            this.msnry.appended(element);

            // layout if first item
            if (isFirstItem) {
                this.layout();
            }
        }
    }

    public remove(element: HTMLElement) {

        // Tell Masonry that a child element has been removed
        this.msnry.remove(element);

        // Layout items
        this.layout();
    }
}
