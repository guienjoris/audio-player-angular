import { Component, OnInit} from '@angular/core';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'Audio Player';
  playlistBrut: any[]=[];
  files : any[] = [];
  playlistFinal: any[]= [];
  srcMusic: string;
  musicPlaying: string;
  playlistDisplay: any[]= [];

  constructor( private sanitizer : DomSanitizer){}
  ngOnInit(){
  }
  
  select(event:any){
    this.playlistBrut.push(Array.prototype.slice.call(event.target.files));
    this.playlistFinal = [].concat(...this.playlistBrut)
    console.log(this.playlistBrut)
  }
  
  play(){
    let i:number;
    for(i=0;i< this.playlistFinal.length;i++){
      this.files.push(URL.createObjectURL(this.playlistFinal[i]));
    }
    this.playlistBrut =[];
    this.playlistDisplay = this.playlistFinal;
    this.playlistFinal =[];
    console.log(this.playlistFinal)
  }
  delete(index:number){
    this.playlistBrut.splice(index,1);
    this.playlistFinal.splice(index,1);

  }
  selectMusik(index:any){
    this.musicPlaying= this.playlistDisplay[index].name;
    this.srcMusic = this.files[index];
    console.log(this.srcMusic,this.musicPlaying)
  }
  deletePlaylist(){
    this.playlistBrut = [];
    this.playlistFinal= [];
    this.playlistDisplay = [];
    this.musicPlaying= "";
    this.files = [];
    console.log(this.files,this.playlistBrut,this.playlistFinal,this.musicPlaying);
  }
}

