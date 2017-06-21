import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public editForm: FormGroup;
  public noteDetails;
  public paramId;
  public noteId;
  public allNotes = [];
  public populatedTag = [];

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router, private route: ActivatedRoute) { 
    this.editForm = this.fb.group({
      title: [''],
      content: [''],
      tag: ['']
    })
  }

  ngOnInit() {
    this.fetchId();
    this.populateForm();
  }

  populateForm() {
    this.api.fetchNotes().subscribe((res:any) => {
      this.allNotes = res;
      this.noteDetails = this.getNoteDetails(this.noteId, this.allNotes);
      console.log('details', this.noteDetails.tags);
      this.noteDetails.tags.map((e) => {
        this.populatedTag.push(e.name);
      })
      if(this.noteDetails.title) {
        this.buildForm();
      }
    }, err => {
    });
  }

  buildForm() {
    this.editForm = this.fb.group({
      title: [ '' || this.noteDetails.title ],
      content: [ '' || this.noteDetails.content],
      tag: [ '' || this.populatedTag.toString()]
    });
  }

 fetchId() {
    this.paramId =  this.route.params.subscribe(params => {
      console.log(params);
      let id = +params['id']
      this.noteId = id;
    });
  }


  getNoteDetails(id, notes) {
    console.log(id, notes);
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        return notes[i];
      }
    }
  }

  updateNote() {
    // this.initForm();
    let note = {
      title: this.editForm.get('title').value,
      content: this.editForm.get('content').value,
      tag: this.editForm.get('tag').value
    }
    this.api.updateNote(this.noteId, note).subscribe((res:any)=> {
      console.log('note updated', res);
      this.router.navigate(['']);
    }, err => {
      console.log('note not created', err);
      alert('Failed to create note');
    });
  }

}
