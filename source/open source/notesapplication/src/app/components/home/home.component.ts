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
  public sFilter = '';
  public filteredNotes;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.populateNotes();
    this.customFilter();
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
      this.allNotes = this.allNotes.filter(e => e.id !== id);
    }, err => {
      alert('failed to delete note');
    })
  }

  gotoAdd() {
    console.log('gootoadd');
    this.router.navigate(['add']);
  }

  customFilter() {
    let query = this.sFilter.toLowerCase();
    this.filteredNotes = this.allNotes;

    if (query.trim()) {
      this.filteredNotes.forEach((e, i) => {
        console.log(e,i)
        this.filteredNotes[i] = e.filter(f => String(f.title).toLowerCase().includes(query)
          || f.content.toLowerCase().includes(query)
        );
      });
    }
  }

  gwtNotesByTag() {
    
  }

  removeTag(id) {
    this.api.deleteTag(id).subscribe(() => {
        console.log('deleted');
      }, err => {
        alert('failed to delete note');
      });
  }

  gotoUpdate(id) {
    console.log(id);
    this.router.navigate(['update', id]);
  }


}
