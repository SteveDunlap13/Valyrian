
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { TodoEntryService, ImageService } from '../../services/index';
import { TodoEntry } from '../../models/index';



@Component({
    selector: 'todoentries',
    templateUrl: 'todoentries.component.html'
})
export class TodoEntriesComponent implements OnInit, OnChanges {

    @Input() groupId: number;
    private todoEntries: TodoEntry[] = [];
    private refresh: Subject<any> = new Subject();
    private mockImages: Array<any>;


    constructor(private todoEntryService: TodoEntryService,
                private imageService: ImageService) { }


    ngOnInit() {
        //this.fetchImages();
    }
    
    ngOnChanges(changes: any) {

        this.groupId = changes.groupId.currentValue;
        this.fetchTodoEntries();
    }


    fetchTodoEntries(): void {

        if (this.groupId != null) {

            //let randomIndex = Math.floor((Math.random() * this.mockImages.length) );

            this.todoEntryService.getTodoEntries(this.groupId).subscribe(tdes => {
                this.todoEntries = tdes.map(r => {
                    //if (this.mockImages.length) {
                    //    r.imageTitle = this.mockImages[randomIndex].title;
                    //    r.imageUrl = this.fetchImages[randomIndex].url;
                    //}
                    return r;
                });

                this.refresh.next();
            });
        }
    }

    fetchImages() {

        this.imageService.getImages().subscribe(res => this.mockImages = res.slice(0, 100));
    }
}
