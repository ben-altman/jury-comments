# README

# Jury Comments App

A javascript application with a Rails API, this project is to fulfill the JavaScript and Rails requirement for the Flatiron School.

For those unfamiliar with music schools, a jury is an annual or biannual live evaluation of a student's performance on their primary instrument or voice. It is presented to a faculty panel, not unlike an oral exam. The faculty make comments on the performance and submit a rating of some sort. In the case of this app, faculty can score a performance on a 1 to 10 scale. This app provides a digital interface for faculty members to view and add students, list their repertoire, and then view and add comments.

## Installation

To run this application, please fork and clone, then install gems by running:
``$ bundle install``

Set up the database:
``$ rake db:create db:migrate``

To see the application with sample data:
``$ rake db:seed``

In the terminal, ``cd`` to the backend directory, the start the server by running:
``rails server``

Return to the main directory, then view the app by opening ``index.html``.

## Utility

There is great opportunity for expansion, user accounts, etc. At the moment, rather than full CRUD functionality, the user has only Read and Create.
