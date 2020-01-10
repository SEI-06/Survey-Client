## Poll-ar Bear: <br>Single Question Surveys
This SPA is a survey application that can be used to create custom surveys. A user
can perform basic authentication actions, such as sign in/sign up/change password/
sign out. Once signed in, from the main view, the user can create a new survey,
which will have a title (question) and four answers to the survey question. The user
can also get all surveys, which will show surveys that all users have created. When
viewing surveys, the user has multiple options: they can see the results of a
given survey (which will show how many users chose each answer), they can update
and delete surveys (which will only allow the user to update/delete surveys) they
have created, and can show details of a survey (such as who made it). From the menu,
a user can see only surveys they have created, as well as take a survey. In taking
a survey, a user can choose out of the available surveys. Each survey is multiple
choice, so the user can select one answer, and hit submit, thus making the results
viewable.

[Try Poll-ar Bear Out!](https://sei-06.github.io/Survey-Client/)

![Poll-ar Bear](https://i.imgur.com/7gtHcOm.png)

#### Links to Back End
[Back End Repo](https://github.com/SEI-06/Survey-API)

[Deployed API](https://morning-reef-04926.herokuapp.com)

#### Technologies Used
1. Express
2. MongoDB
3. Mongoose
2. JavaScript
3. jQuery
4. AJAX
6. Handlebars
7. HTML
8. CSS
9. Bootstrap

### The Planning
We started off by utilizing our user stories (below), and using them to create our
wireframes and ERD. Keeping the goal of MVP in mind, we kept our wireframes and
ERD simple, sticking to our user stories, and the scope of the project.
As this was a team project, we had four of us to split the work between. So in
our initial planning, we divvied up the work, planned out who would work on the
first steps of the application.

### The Process and Problem Solving

We split into teams of two, and would tackle the tasks for the day. This could be as technically complex as building the backend in mongoDB or as creative as styling modals. Depending on the scope of the task, we would often peer program, with one person typing code on their laptop while the other would find and scan useful resources like documentation. When hit with a particularly hard problem, we were able to talk it out together and individually research and test different solutions.

Some of the more challenging aspects were writing the structure needed to get a unique users surveys and connecting user questions to responses. Using regularly planned scrums (usually one before moring, one after lunch) we were able to see where we were at and readjust our goals accordingly. While we faced regular challenges, we had a diverse knowlage of skills that allowed us to share our stregnths.

### Planning Process
#### User Stories
- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to create a survey with a title and possible answers.
- As a signed in user, I would like to update my survey's title and possible answers of a survey.
- As a signed in user, I would like to delete my survey.
- As a signed in user, I would like to see all surveys and its answers.
- As a signed in user, I would like to take a survey.

#### Wireframe

![SurveySPAWireframe](https://i.imgur.com/7ESgDl2.jpg)

### Remaining Unsolved Problems

In future iterations, we would:

- Add an "options" resource so a user can control how many answers to their survey
  they want available
- Add a chart for results
- Edit so "delete" and "update" are only available for surveys belonging to the
  signed in user
- Multi choice surveys
- Edit the layout to make more user friendly




1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
