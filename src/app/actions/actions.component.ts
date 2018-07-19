import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  readonly type = ADD_TUTORIAL

  constructor( public payload: Tutorial ) { }

  ngOnInit() {
  }
}


export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL

    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL

    constructor(public payload: number) {}
}

export type Actions = AddTutorial | RemoveTutorial;

// KEYS
export const ADD_TUTORIAL = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove'
