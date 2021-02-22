# Daily workday planner
A daily calendar for creating and maintaining a schedule

# Description 
This project called for the creation of a daily planner that would allow an employee to enter and save reminders for each hour of the work day. For retrieving and displaying the current day/date I made use of Luxon's DateTime methods and used jQuery for the creation of the actual planner. 

On opening th planner, the employee is presented with time blocks for standard business hours and the current date and time is displayed at the top of the page. If the time-block represents a time that is past, it will be colored grey and input to that field will be disabled. If the time-block represents the present time, it will be colored light pink and input will be possible. If the time-blocks represents future times, they will be colored dark pink and input will be possible.

On entering reminders, the employee can save them by clicking the provided buttons and on refreshing the page, the reminders will still be present. For this functionality, local storage was made use of.

Attached  is an image of the UI of the planner:
![Planner-Demo](images/planner-demo.png)


Attached is the link to the github repository of the project:

https://github.com/nidaqg/daily-workday-planner 

For any questions or queries contact me at nidaqg@gmail.com


Attached is the link to the deployed project:

https://nidaqg.github.io/daily-workday-planner/ 

# License

MIT License

Copyright (c) [2021] [Nida_Ghuman]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.




