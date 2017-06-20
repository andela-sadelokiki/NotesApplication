import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allNotes = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.populateNotes();
  }

  populateNotes() {
    this.api.fetchNotes().subscribe((notes) => {
      console.log(notes);
      this.allNotes = notes;
    }, err => {
      console.log(err);
    });
  }

  deleteNote(id) {
    this.api.deleteNote(id).subscribe(() => {
      console.log('deleted');
      this.allNotes.splice(this.allNotes.indexOf(id), 1);
    }, err => {
      alert('failed to delete note');
    })
  }

  gotoAdd() {
    console.log('gootoadd');
    this.router.navigate(['add']);
  }

  removeTag(id) {
    this.api.deleteTag(id).subscribe(() => {
        console.log('deleted');
      }, err => {
        alert('failed to delete note');
      });
  }

  gotoUpdate(id) {
    this.router.navigate(['update', id]);
  }


}
