# SchedulerEntry

Base entry for schedulers for performing repeated tasks.

## constructor

**Parameters**

-   `scheduler` **fxn.Scheduler** The scheduler instance this entry belongs to

## exec

Execute the scheduler entry's associated task

## getDateOffset

Get the difference between now and the last time the task should be executed. Overwritten when inherited.

**Parameters**

-   `cur` **[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)** The current Date object

## perform

Assign a task to this scheduler entry

**Parameters**

-   `task` **(fxn.Task|[constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor))** The Task to perform (must have an exec function)
-   `Task`  

## start

Begin the scheduler entry. Create a timeout for the first execution, and an interval for all subsequent ones.

## stop

Clear all timeouts and intervals for the scheduler entry (stops it).

# Scheduler

Use to delegate tasks minutely, hourly, daily, or weekly.

## daily

Construct a new fxn.DailyEntry. All arguments passed represent the times to execute.

## hourly

Construct a new fxn.HourlyEntry. All arguments passed represent the times to execute.

## minutely

Construct a new fxn.MinutelyEntry. All arguments passed represent the times to execute.

## restart

Restarts all associated SchedulerEntry objects for the Scheduler

## setApp

Set the app for the scheduler.

**Parameters**

-   `app` **fxn.Application** Your fxn application

## start

Starts all associated SchedulerEntry objects for the Scheduler

## stop

Stops all associated SchedulerEntry objects for the Scheduler

## weekly

Construct a new fxn.WeeklyEntry. All arguments passed represent the times to execute.

# Controller

Controller for handling HTTP requests

## \_parseHeaderKey

Uppercase all words in header key.

**Parameters**

-   `key` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## after

Intended to be overwritten when inherited. Run after renderware.

## allowOrigin

Specifies CORS (cross origin resource sharing) headers.

**Parameters**

-   `value` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Use '\*' for a generic API service that accepts requests from anywhere, otherwise specific a domain.

Returns **this** 

## appendHeader

Add a value to a existing specific response header. If header not exists create it.

**Parameters**

-   `key` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `value` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## before

Intended to be overwritten when inherited. Run before middleware.
  Controller-specific middleware and renderware here

## del

Method called when a route is hit with a DELETE request, if not first intercepted by custom Controller#destroy method. Intended to be overwritten when inherited.

## get

Method called when a route is hit with a GET request, if not first intercepted by custom Controller#index or Controller#show methods. Intended to be overwritten when inherited.

## getHeader

Get the value of a specific response header

**Parameters**

-   `key` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `value` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Default value returned if not found

## getStatus

The current HTTP status code expected to be used by the outgoing http.ServerResponse

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

## options

Method called when a route is hit with an OPTIONS request. Typically unused, exists for CORS purposes.

## post

Method called when a route is hit with a POST request, if not first intercepted by custom Controller#create method. Intended to be overwritten when inherited.

## put

Method called when a route is hit with a PUT request, if not first intercepted by custom Controller#update method. Intended to be overwritten when inherited.

## redirect

Creates a 302 redirect to the desired location

**Parameters**

-   `location` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## render

Render an HTTP response (end ServerResponse) based on provided data

**Parameters**

-   `data` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Can be Buffer, String, or Plain Object

## securityPolicy

Add Content-Security-Policy headers

**Parameters**

-   `directive` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The directive of the security policy
-   `src` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The value (domain) to add to the policy

## setHeader

Set a specific response header

**Parameters**

-   `key` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `value` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

## setHeaders

Set HTTP headers to be used by the outgoing http.ServerResponse

**Parameters**

-   `object` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Object containing key-value pairs for HTTP headers

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The headers object created

## status

Set HTTP status code for this response

**Parameters**

-   `code` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# Application

Single HTTP Application. Logging and response functionality.

## error

HTTP Error

**Parameters**

-   `req`  
-   `res`  
-   `start`  
-   `status`  
-   `message`  
-   `err`  

## handler

HTTP Request Handler

**Parameters**

-   `req` **http.ClientRequest** 
-   `res` **http.ServerResponse** 

## listen

Listens for incoming connections on a provided port

**Parameters**

-   `port` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

## logResponse

Logs a server response in the console

**Parameters**

-   `statusCode` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** HTTP Status Code
-   `url` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The url that was hit
-   `t` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The time to execute the request
-   `str`  

## send

Ends the HTTP Response

**Parameters**

-   `req`  
-   `res`  
-   `start`  
-   `status`  
-   `headers`  
-   `data`  
-   `log`  

# WeeklyEntry

**Extends SchedulerEntry**

SchedulerEntry extension for weekly (on the day of week) execution

## constructor

**Parameters**

-   `scheduler` **fxn.Scheduler** the scheduler the entry belongs to
-   `times` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The times (in days of week) to execute the task

## getDateOffset

Sets the offset to the nearest week

**Parameters**

-   `cur` **[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)** The current Date

# HourlyEntry

**Extends SchedulerEntry**

SchedulerEntry extension for hourly (on the minute) execution

## constructor

**Parameters**

-   `scheduler` **fxn.Scheduler** the scheduler the entry belongs to
-   `times` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The times (in minutes) to execute the task

## getDateOffset

Sets the offset to the nearest hour

**Parameters**

-   `cur` **[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)** The current Date

# MinutelyEntry

**Extends SchedulerEntry**

SchedulerEntry extension for minutely (on the second) execution

## constructor

**Parameters**

-   `scheduler` **fxn.Scheduler** the scheduler the entry belongs to
-   `times` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The times (in seconds) to execute the task

## getDateOffset

Sets the offset to the nearest minute

**Parameters**

-   `cur` **[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)** The current Date

# StrongParam

Used to filter parameters from HTTP query string or body data

## constructor

**Parameters**

-   `object` **props** Properties
-   `props`  

# DailyEntry

**Extends SchedulerEntry**

SchedulerEntry extension for daily (on the hour) execution

## constructor

**Parameters**

-   `scheduler` **fxn.Scheduler** the scheduler the entry belongs to
-   `times` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** The times (in hours) to execute the task

## getDateOffset

Sets the offset to the nearest day

**Parameters**

-   `cur` **[Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)** The current Date

# Daemon

Multi-process HTTP Daemon that resets when files changed (in development)

## exit

Shut down a child process given a specific exit code. (Reboot if clean shutdown.)

**Parameters**

-   `child` **child_process** 
-   `code` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Exit status codes

## idle

Daemon failed to load, set it in idle state (accept connections, give dummy response)

## logError

Log an error on the Daemon

**Parameters**

-   `error` **[Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)** 

## start

Starts the Daemon. If all application services fail, will launch a
  dummy error app on the port provided.

**Parameters**

-   `port` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

## unwatch

Stops watching a directory tree for changes

## watch

Watches a directory tree for changes

**Parameters**

-   `path` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Directory tree to watch
-   `onChange` **[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Method to be executed when a change is detected

# endpoint

Creates a new MockRequest object (emulates an HTTP request)

**Parameters**

-   `path` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The path you wish to hit
-   `query` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The query parameters you wish to pass

Returns **fxn.EndpointRequest** 

# ExecutionQueue

Queues middleware, renderware, etc (make sure they fire in order).

## exec

Execute all items, in order. First parameter is a "steady" object that will
be passed by reference to every item in the queue as the first parameter of exec.
Middle parameters are passed by previous item#exec calls (as parameters, after err),
and last parameter is a completion callback.

## push

Alias for ExecutionQueue#use

## unshift

Tell the manager to put an object in the queue (first)

**Parameters**

-   `arguments` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The item constructor (must have exec function) plus other arguments you wish to add to the queue.

## use

Tell the manager to put an object in the queue (last)

**Parameters**

-   `arguments` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** The item constructor (must have exec function) plus other arguments you wish to add to the queue.
