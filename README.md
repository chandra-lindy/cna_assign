# cna_assign

A custom web app built for Ivy Creek Healthcare and Wellness Centre.

This app solves the daily CNA assignment problem.  The main function is
to take in the number of empty beds and names of nurses for the shift
as input and outputs an evenly distributed bed assignments according to
vicinity.  Thus each assignment will consist of rooms that are adjacent
minus empty beds of course.

Give it a try, and contact me for feedback and feature request...

## Login

Before using the system you need to log in.  To do so, use the `login`
keyword followed by your username separated by a space then press enter:

~~~~
login username
~~~~

This will take you to the password prompt.  Simply enter your password, to
gain access to the system.

## Usage
To use this app, access the main input field.  As you may already noticed
it is the only way to interact with the app.  Treat like a command line.
Don't worry, there are only a few keywords.

### Adding and Removing Nurses

To input nurse's assistants you have on staff. This is achieved by using
the `add` keyword which will insert that nurse into the database, as follows:

~~~~
add Nurse Betty
~~~~

To remove a nurse from the database, use the `remove` keyword, followed by
nurse's first name and last name separated by a space:

~~~~
remove John Doe
~~~~

### Displaying Information

To view the list of all nurses you have available in your database use the
`nurses` keyword.  This will give you the option to select the nurses you'd
like to assign bed assignments to for the shift by click the corresponding
check boxes for each nurse.

`display` keyword will display empty beds if any were inputed, and current
census calculated by subtracting number of empty beds from total available.

### Providing Necessary Inputs to Create Assignments

To input the empty beds for the shift, use the `empty` keyword followed by
room numbers and bed letters separated by a space (bed letters are case
insensitive), like so:

~~~~
empty 2 4 7a 11a 33b 22c
~~~~

Subsequent usage of `empty` will not append to previous entry but will replace
it entirely.  So, if you made a mistake and left off one bed, you will need
to re-enter all the empty beds via the `empty` keyword.

To select the nurses for the shift, use the `nurses` keyword to display all
nurses in the database select the nurses by clicking the corresponding check
box for each nurse.  Order matters in your selection.  Ideally, you'd want to
know who will be assigned which run before making your selection.

The `assign` keyword when used after selecting the nurses and empty beds will
display each assignment for each previously selected nurses in the order of
nurse selection.

### Clearing Inputs

Use the `clear` keyword to clear all `nurses` selections and `empty` bed inputs
in the event changes need to be made.  This will clear the slate and the app will
behave as if you had just logged in.

### Future feature

As per requested, the following features are being implemented in one form or another:
- UI/UX redesign
- admin privileges
- nurse view individual assignment
