/*
* This file contains all the examples of what would be send to a webhook form orchastrator
*
*/ 
module.exports = {
	"job.created":{
		  "Type": "job.created",
		  "EventId": "b02a39ddca5b4675aa87026c287f3cae",
		  "Timestamp": "2018-11-26T14:34:30.719095Z",
		  "StartInfo": {
		    "ReleaseKey": "0237af09-80a9-450b-b3a0-20c15dd308fa",
		    "Strategy": "Specific",
		    "RobotIds": [
		      81,
		      78,
		      86,
		      87
		    ],
		    "JobsCount": 0,
		    "Source": "Manual"
		  },
		  "Jobs": [
		    {
		      "Id": 148708,
		      "Key": "e1c32fbf-5ef4-4080-a671-cf6ef75f359a",
		      "State": "Pending",
		      "Source": "Manual",
		      "SourceType": "Manual",
		      "BatchExecutionKey": "17e99516-2e87-475c-bce7-75b7d88ab5b4",
		      "ReleaseName": "RunUntilStoppedManually_all",
		      "Type": "Unattended",
		      "Robot": {
		        "Id": 78,
		        "Name": "bench-zdqlGiDEkM",
		        "MachineId": 77,
		        "MachineName": "bench-ryenclhIkV",
		        "Description": "FPZuy",
		        "Version": "18.3",
		        "UserName": "oqkMV",
		        "Type": "Unattended",
		        "HostingType": "Standard"
		      },
		      "Release": {
		        "Id": 359,
		        "Key": "0237af09-80a9-450b-b3a0-20c15dd308fa",
		        "ProcessKey": "RunUntilStoppedManually",
		        "ProcessVersion": "",
		        "Name": "RunUntilStoppedManually_all",
		        "Description": "",
		        "IsLatestVersion": false,
		        "InputArguments": null
		      },
		      "InputArguments": null,
		      "OutputArguments": null
		    },
		    {
		      "Id": 148709,
		      "Key": "b571d943-305c-40a0-8de7-28fd689e67aa",
		      "State": "Pending",
		      "Source": "Manual",
		      "SourceType": "Manual",
		      "BatchExecutionKey": "17e99516-2e87-475c-bce7-75b7d88ab5b4",
		      "ReleaseName": "RunUntilStoppedManually_all",
		      "Type": "Unattended",
		      "Robot": {
		        "Id": 81,
		        "Name": "bench-xdKZjRoHdh",
		        "MachineId": 74,
		        "MachineName": "bench-fwYwxYcDBf",
		        "Description": "gKaiF",
		        "Version": "18.3",
		        "UserName": "ImDvI",
		        "Type": "Unattended",
		        "HostingType": "Standard"
		      },
		      "Release": {
		        "Id": 359,
		        "Key": "0237af09-80a9-450b-b3a0-20c15dd308fa",
		        "ProcessKey": "RunUntilStoppedManually",
		        "ProcessVersion": "",
		        "Name": "RunUntilStoppedManually_all",
		        "Description": "",
		        "IsLatestVersion": false,
		        "InputArguments": null
		      },
		      "InputArguments": null,
		      "OutputArguments": null
		    }
		  ],
		  "TenantId": 1,
		  "UserId": 2
		},
	"job.started":{
		  "Type": "job.started",
		  "EventId": "816648dda7394ef7804b5c893ff1c58a",
		  "Timestamp": "2018-11-26T13:49:33.4532871Z",
		  "Job": {
		    "Id": 148649,
		    "Key": "da8fe505-d2a7-4546-b723-cf58807d69ad",
		    "State": "Running",
		    "StartTime": "2018-11-26T13:49:33.4432884Z",
		    "Info": "Waiting for execution to start...",
		    "OutputArguments": null,
		    "Robot": {
		      "Id": 4778,
		      "Name": "local",
		      "MachineName": "PC-DOC"
		    },
		    "Release": {
		      "Id": 353,
		      "Key": "688c79ec-205d-4c6f-a7e2-87c4fb258a92",
		      "ProcessKey": "Doc_AllEvents"
		    }
		  },
		  "TenantId": 1,
		  "OrganizationUnitId": 1
		},
	"job.faulted":{
		  "Type": "job.faulted",
		  "EventId": "ec5afc6f07254520b8a6d31036b96975",
		  "Timestamp": "2018-11-26T14:14:26.2879878Z",
		  "Job": {
		    "Id": 148671,
		    "Key": "9cc6c2e4-237d-42f6-8cb8-43010652fb22",
		    "State": "Faulted",
		    "StartTime": "2018-11-26T14:14:25.637Z",
		    "EndTime": "2018-11-26T14:14:26.2529616Z",
		    "Info": "This workflow always fails\r\n\r\nAn ExceptionDetail, likely created by IncludeExceptionDetailInFaults=true, whose value is:\nSystem.InvalidOperationException: This workflow always fails\n   at System.Activities.Statements.Throw.Execute(CodeActivityContext context)\r\n   at System.Activities.CodeActivity.InternalExecute(ActivityInstance instance, ActivityExecutor executor, BookmarkManager bookmarkManager)\r\n   at System.Activities.ActivityInstance.Execute(ActivityExecutor executor, BookmarkManager bookmarkManager)\r\n   at System.Activities.Runtime.ActivityExecutor.ExecuteActivityWorkItem.ExecuteBody(ActivityExecutor executor, BookmarkManager bookmarkManager, Location resultLocation)",
		    "OutputArguments": {},
		    "Robot": {
		      "Id": 4778,
		      "Name": "local",
		      "MachineName": "PC-DOC"
		    },
		    "Release": {
		      "Id": 358,
		      "Key": "8fad9c36-237b-49a6-a939-47963fb8099a",
		      "ProcessKey": "FailingJob"
		    }
		  },
		  "TenantId": 1,
		  "OrganizationUnitId": 1
		},
	"job.completed":{
		  "Type": "job.completed",
		  "EventId": "15412ff77dce4d489fc32c273862839b",
		  "Timestamp": "2018-11-26T14:37:26.3231812Z",
		  "Job": {
		    "Id": 148712,
		    "Key": "d7a77655-3245-4d97-b127-04b3abebc439",
		    "State": "Successful",
		    "StartTime": "2018-11-26T14:37:25.433Z",
		    "EndTime": "2018-11-26T14:37:26.2861846Z",
		    "Info": "Job completed",
		    "OutputArguments": {
		      "product": 5000,
		      "sum": 150,
		      "diff": 50
		    },
		    "Robot": {
		      "Id": 4778,
		      "Name": "DocBot",
		      "MachineName": "PC-DOC"
		    },
		    "Release": {
		      "Id": 357,
		      "Key": "6205f5a8-d762-4feb-98ec-d43534ef9f89",
		      "ProcessKey": "Args_AddNumbers"
		    }
		  },
		  "TenantId": 1,
		  "OrganizationUnitId": 1
		},
	"job.stopped":{
		  "Type": "job.stopped",
		  "EventId": "39896a0a1cc8489987ae3655945ed2c8",
		  "Timestamp": "2018-11-26T14:33:37.0459322Z",
		  "Jobs": [
		    {
		      "Id": 148707,
		      "Key": "154ae99a-695d-43bb-90ea-0af53b8b8232",
		      "State": "Stopped",
		      "StartTime": "2018-11-26T14:33:33.023Z",
		      "EndTime": "2018-11-26T14:33:37.0079364Z",
		      "Info": "Job canceled",
		      "OutputArguments": {},
		      "Robot": {
		        "Id": 4778,
		        "Name": "DocBot",
		        "MachineName": "PC-DOC"
		      },
		      "Release": {
		        "Id": 359,
		        "Key": "0237af09-80a9-450b-b6a0-20c15dd308fa",
		        "ProcessKey": "TestJob"
		      }
		    }
		  ],
		  "TenantId": 1,
		  "OrganizationUnitId": 1
		},
	"robot.created":{
		  "Type": "robot.created",
		  "EventId": "a1f904c0de844dd1811581a176dde54f",
		  "Timestamp": "2018-11-26T14:20:37.6962672Z",
		  "Robots": [
		    {
		      "Id": 5769,
		      "Name": "TestDocBot",
		      "MachineId": 618,
		      "MachineName": "PC-DOC",
		      "Description": "robot description",
		      "UserName": "uipath\\new-user",
		      "Type": "Unattended",
		      "HostingType": "Standard",
		      "Environments": [],
		      "ExecutionSettings": {
		        "TracingLevelState": true,
		        "TracingLevel": "Off",
		        "StudioNotifyServerState": true,
		        "StudioNotifyServer": true,
		        "LoginToConsoleState": false,
		        "ResolutionWidthState": true,
		        "ResolutionWidth": "1555",
		        "ResolutionHeightState": true,
		        "ResolutionHeight": "9001",
		        "ResolutionDepthState": false,
		        "FontSmoothingState": false
		      }
		    }
		  ],
		  "TenantId": 1,
		  "UserId": 2
		},
	"robot.updated":{
		  "Type": "robot.updated",
		  "EventId": "1b4cc368aa204a2291d036ce7ad659ff",
		  "Timestamp": "2018-11-26T14:21:28.0199575Z",
		  "Robots": [
		    {
		      "Id": 225,
		      "Name": "DocBot",
		      "MachineId": 150,
		      "MachineName": "PC-DOC",
		      "Description": "A robot for documentation.",
		      "Version": "18.3",
		      "UserName": "TkqRA",
		      "Type": "Unattended",
		      "HostingType": "Standard",
		      "ExecutionSettings": {
		        "TracingLevelState": true,
		        "TracingLevel": "Error",
		        "StudioNotifyServerState": true,
		        "StudioNotifyServer": true,
		        "LoginToConsoleState": true,
		        "LoginToConsole": false,
		        "ResolutionWidthState": true,
		        "ResolutionWidth": "1200",
		        "ResolutionHeightState": true,
		        "ResolutionHeight": "1600",
		        "ResolutionDepthState": false,
		        "FontSmoothingState": false
		      }
		    }
		  ],
		  "TenantId": 1,
		  "UserId": 2
		},
	"robot.deleted":{
		  "Type": "robot.deleted",
		  "EventId": "c8401e57449a4b83a44e35a35be0738b",
		  "Timestamp": "2018-11-26T14:19:18.2038517Z",
		  "Robots": [
		    {
		      "Id": 159,
		      "Name": "TestAPI",
		      "MachineId": 117,
		      "MachineName": "PC-DOC",
		      "Description": "This is an API test.",
		      "Version": "18.3",
		      "UserName": "Mda",
		      "Type": "Unattended",
		      "HostingType": "Standard"
		    },
		    {
		      "Id": 169,
		      "Name": "DocBot",
		      "MachineId": 122,
		      "MachineName": "PC-DOC",
		      "Description": "For testing purposes.",
		      "Version": "18.3",
		      "UserName": "Mda",
		      "Type": "Unattended",
		      "HostingType": "Standard"
		    },
		    {
		      "Id": 171,
		      "Name": "bench-iFPcNQWYGQ",
		      "MachineId": 123,
		      "MachineName": "PC-unAUMfGFGj",
		      "Description": "Testing robot.",
		      "Version": "18.3",
		      "UserName": "Mda",
		      "Type": "Unattended",
		      "HostingType": "Standard"
		    }
		  ],
		  "TenantId": 1,
		  "UserId": 2
		},
	"robot.status":{
		  "Type": "robot.status",
		  "EventId": "980f4053fd6e4c04a3526d61cd80a7eb",
		  "Timestamp": "2018-11-26T14:12:30.7943064Z",
		  "Sessions": [
		    {
		      "SessionId": 4778,
		      "RobotId": 4778,
		      "HostMachineName": "PC-DOC",
		      "State": "Busy",
		      "ReportingTime": "2018-11-26T14:12:30.7463063Z",
		      "IsUnresponsive": false
		    }
		  ],
		  "TenantId": 1,
		  "OrganizationUnitId": 1
		},
	"queue.created":{
		  "Type": "queue.created",
		  "EventId": "d20b0839229443e8ab36c8fbb7cc8953",
		  "Timestamp": "2018-11-26T14:31:14.4357176Z",
		  "Queues": [
		    {
		      "Id": 40079,
		      "Name": "new-queue-definition-name",
		      "Description": "This the description of the queue.",
		      "MaxNumberOfRetries": 3,
		      "AcceptAutomaticallyRetry": true,
		      "EnforceUniqueReference": true
		    }
		  ],
		  "TenantId": 1,
		  "UserId": 2
		},
	"queue.updated":{
		  "Type": "queue.updated",
		  "EventId": "cc859a30057d430d97acb1c4da33c183",
		  "Timestamp": "2018-11-26T14:31:45.3594898Z",
		  "Queues": [
		    {
		      "Id": 40079,
		      "Name": "new-queue-definition-name",
		      "Description": "This is an update to the queue description.",
		      "MaxNumberOfRetries": 3,
		      "AcceptAutomaticallyRetry": true,
		      "EnforceUniqueReference": true
		    }
		  ],
		  "TenantId": 1,
		  "UserId": 2
		},
	"queue.deleted":{
		  "Type": "queue.deleted",
		  "EventId": "056a9c975ae84f99a2fcb5361349679b",
		  "Timestamp": "2018-11-26T14:32:09.1778423Z",
		  "Queues": [
		    {
		      "Id": 40079,
		      "Name": "new-queue-definition-name",
		      "Description": "This is an update to the queue description.",
		      "MaxNumberOfRetries": 3,
		      "AcceptAutomaticallyRetry": true,
		      "EnforceUniqueReference": true
		    }
		  ],
		  "TenantId": 1,
		  "UserId": 2
		},
	"queueItem.added":{
		  "Type": "queueItem.added",
		  "EventId": "9314c897bcb14bcfaa9d1f5752793153",
		  "Timestamp": "2018-11-26T14:14:31.2113498Z",
		  "Queue": {
		    "Id": 40014,
		    "Name": "temp",
		    "Description": "33 Featured",
		    "MaxNumberOfRetries": 0,
		    "AcceptAutomaticallyRetry": false,
		    "EnforceUniqueReference": false
		  },
		  "QueueItems": [
		    {
		      "Id": 22135,
		      "Key": "0e7fd9f2-5063-4ab4-a43e-5c3bf5ce6546",
		      "QueueDefinitionId": 40014,
		      "Status": "InProgress",
		      "ReviewStatus": "None",
		      "Priority": "High",
		      "CreationTime": "2018-11-26T14:14:31.1963476Z",
		      "StartProcessing": "2018-11-26T14:14:31.1963476Z",
		      "SecondsInPreviousAttempts": 0,
		      "RetryNumber": 0,
		      "SpecificContent": {
		        "field1": "Jane Doe",
		        "field2": 125123,
		        "field3": false,
		        "field4": "janedoe@work.com"
		      }
		    }
		  ],
		  "TenantId": 1,
		  "UserId": 4947
		},
	"queueItem.transactionStarted":{
		  "Type": "queueItem.transactionStarted",
		  "EventId": "49ff13b6ad4e47d58a8d3e47a771cb15",
		  "Timestamp": "2018-11-26T14:17:21.4332911Z",
		  "QueueItem": {
		    "Id": 22170,
		    "Key": "db36add9-dcde-4b79-83ac-bfb8ed0764e2",
		    "QueueDefinitionId": 40014,
		    "Status": "InProgress",
		    "ReviewStatus": "None",
		    "Priority": "High",
		    "CreationTime": "2018-11-26T14:17:21.4182874Z",
		    "StartProcessing": "2018-11-26T14:17:21.4182874Z",
		    "SecondsInPreviousAttempts": 0,
		    "RetryNumber": 0,
		    "SpecificContent": {
		      "field1": "A string",
		      "field2": 35125,
		      "field3": true
		    }
		  },
		  "Queue": {
		    "Id": 40014,
		    "Name": "temp",
		    "Description": "33 Featured",
		    "MaxNumberOfRetries": 0,
		    "AcceptAutomaticallyRetry": false,
		    "EnforceUniqueReference": false
		  },
		  "TenantId": 1,
		  "UserId": 4947
		},
	"queueItem.transactionCompleted":{
		  "Type": "queueItem.transactionCompleted",
		  "EventId": "916b1272c7714e92987788cab760cff3",
		  "Timestamp": "2018-11-26T14:30:18.3948142Z",
		  "QueueItem": {
		    "Id": 22193,
		    "Key": "398a6d1f-615f-499c-86d3-ee325ab865b4",
		    "QueueDefinitionId": 40014,
		    "Status": "Successful",
		    "ReviewStatus": "None",
		    "Priority": "High",
		    "CreationTime": "2018-11-26T14:30:18.127Z",
		    "StartProcessing": "2018-11-26T14:30:18.127Z",
		    "EndProcessing": "2018-11-26T14:30:18.3858151Z",
		    "SecondsInPreviousAttempts": 0,
		    "RetryNumber": 0,
		    "Robot": {
		      "Id": 4778,
		      "Name": "local",
		      "MachineId": 2229,
		      "MachineName": "PC-DOC",
		      "Version": "18.3.0.453",
		      "UserName": "UIPATH\\doc.test",
		      "Type": "Unattended",
		      "HostingType": "Standard"
		    },
		    "SpecificContent": {
		      "field1": "Jane Doe",
		      "field2": 125123,
		      "field3": false,
		      "field4": "janedoe@work.com"
		    },
		    "Output": {
		      "PetName": "Ksiusha",
		      "NrOfLegs": 4
		    }
		  },
		  "Queue": {
		    "Id": 40014,
		    "Name": "temp",
		    "Description": "33 Featured",
		    "MaxNumberOfRetries": 0,
		    "AcceptAutomaticallyRetry": false,
		    "EnforceUniqueReference": false
		  },
		  "TenantId": 1,
		  "UserId": 4947
		},
	"queueItem.transactionFailed":{
		  "Type": "queueItem.transactionFailed",
		  "EventId": "6fe77f39c7f544a0a6fb0dd29842d7d7",
		  "Timestamp": "2018-11-26T14:16:31.9632204Z",
		  "QueueItem": {
		    "Id": 22160,
		    "Key": "e855153c-6b4d-441a-82b5-3d4585214485",
		    "QueueDefinitionId": 40014,
		    "Status": "Failed",
		    "ReviewStatus": "None",
		    "ProcessingException": {
		      "Reason": "Failed",
		      "Details": "Error during Heartbeat Status shutdown flushCastle.MicroKernel.ComponentNotFoundException: No component for supporting the service UiPath.Core.Caching.IHeartbeatStatusFlush was found",
		      "Type": "BusinessException"
		    },
		    "Priority": "High",
		    "CreationTime": "2018-11-26T14:16:31.54Z",
		    "StartProcessing": "2018-11-26T14:16:31.54Z",
		    "EndProcessing": "2018-11-26T14:16:31.7942218Z",
		    "SecondsInPreviousAttempts": 0,
		    "RetryNumber": 0,
		    "Robot": {
		      "Id": 4778,
		      "Name": "local",
		      "MachineId": 2229,
		      "MachineName": "PC-DOC",
		      "Version": "18.3.0.453",
		      "UserName": "UIPATH\\doc.test",
		      "Type": "Unattended",
		      "HostingType": "Standard"
		    },
		    "SpecificContent": {
		      "field1": "A string",
		      "field2": 35125,
		      "field3": true
		    }
		  },
		  "Queue": {
		    "Id": 40014,
		    "Name": "temp",
		    "Description": "33 Featured",
		    "MaxNumberOfRetries": 0,
		    "AcceptAutomaticallyRetry": false,
		    "EnforceUniqueReference": false
		  },
		  "TenantId": 1,
		  "UserId": 4947
		},
	"queueItem.transactionAbandoned":{
		  "Type": "queueItem.transactionAbandoned",
		  "EventId": "e216476b5fa34c77ac3b0ed7669bf4d1",
		  "Timestamp": "2018-11-26T14:52:22.436302Z",
		  "Queue": {
		    "Id": 40014,
		    "Name": "temp",
		    "Description": "33 Featured",
		    "MaxNumberOfRetries": 0,
		    "AcceptAutomaticallyRetry": false,
		    "EnforceUniqueReference": false
		  },
		  "QueueItems": [
		    {
		      "Id": 22189,
		      "Key": "7434a2cd-acfe-4cb3-932e-296b0c57bcb5",
		      "QueueDefinitionId": 40014,
		      "Status": "Abandoned",
		      "ReviewStatus": "None",
		      "Priority": "High",
		      "CreationTime": "2018-11-26T14:19:01.66Z",
		      "StartProcessing": "2018-11-17T14:19:01.66Z",
		      "EndProcessing": "2018-11-26T14:19:01.95Z",
		      "SecondsInPreviousAttempts": 0,
		      "RetryNumber": 0,
		      "Robot": {
		        "Id": 4778,
		        "Name": "local",
		        "MachineId": 2229,
		        "MachineName": "PC-DOC",
		        "Version": "18.3.0.453",
		        "UserName": "UIPATH\\test.doc",
		        "Type": "Unattended",
		        "HostingType": "Standard"
		      },
		      "SpecificContent": {
		        "field1": "Jane Doe",
		        "field2": 125123,
		        "field3": false,
		        "field4": "janedoe@work.com"
		      },
		      "Output": {}
		    },
		    {
		      "Id": 22190,
		      "Key": "15beaad8-fc0f-4989-9d5b-621fc350a20d",
		      "QueueDefinitionId": 40014,
		      "Status": "Abandoned",
		      "ReviewStatus": "None",
		      "ProcessingException": {
		        "Reason": "Failed",
		        "Details": "Error during Heartbeat Status shutdown flushCastle.MicroKernel.ComponentNotFoundException: No component for supporting the service UiPath.Core.Caching.IHeartbeatStatusFlush was found",
		        "Type": "BusinessException"
		      },
		      "Priority": "High",
		      "CreationTime": "2018-11-26T14:19:01.797Z",
		      "StartProcessing": "2018-11-17T14:19:01.797Z",
		      "EndProcessing": "2018-11-26T14:19:02.09Z",
		      "SecondsInPreviousAttempts": 0,
		      "RetryNumber": 0,
		      "Robot": {
		        "Id": 4778,
		        "Name": "local",
		        "MachineId": 2229,
		        "MachineName": "PC-DOC",
		        "Version": "18.3.0.453",
		        "UserName": "UIPATH\\test.doc",
		        "Type": "Unattended",
		        "HostingType": "Standard"
		      },
		      "SpecificContent": {
		        "field1": "A string",
		        "field2": 35125,
		        "field3": true
		      }
		    }
		  ],
		  "TenantId": 1,
		  "OrganizationUnitId": 1
		},
	"process.created":{
		  "Type": "process.created",
		  "EventId": "aa55eb899ed241cdbeb6b6ef417f1dd5",
		  "Timestamp": "2018-11-26T14:22:58.44896Z",
		  "Releases": [
		    {
		      "Id": 363,
		      "Key": "8a3db114-69c3-4b67-a8e7-7a5985bde461",
		      "ProcessKey": "BlankProcess_2",
		      "ProcessVersion": "1.0.6899.31694",
		      "Name": "BlankProcess_2_all",
		      "Description": "BlankProcess description",
		      "IsLatestVersion": false,
		      "InputArguments": {
		        "a": "arg_value_a",
		        "b": "arg_value_b"
		      }
		    }
		  ],
		  "TenantId": 1,
		  "UserId": 2
		},
	"process.updated":{
		  "Type": "process.updated",
		  "EventId": "dc61eec5aad148c5817036b3cc2f5e00",
		  "Timestamp": "2018-11-26T14:25:27.5423521Z",
		  "Releases": [
		    {
		      "Id": 353,
		      "Key": "688c79ec-205d-4c6f-a7e2-87c4fb258a92",
		      "ProcessKey": "Doc_AllEvents",
		      "ProcessVersion": "1.0.6904.29557",
		      "Name": "Doc_AllEvents_3bf688c8-01e",
		      "Description": "",
		      "IsLatestVersion": false,
		      "Environment": {
		        "Id": 1,
		        "Name": "3bf688c8-01e"
		      },
		      "InputArguments": {
		        "queue": "temp"
		      }
		    }
		  ],
		  "TenantId": 1,
		  "UserId": 2
		},
	"process.deleted":{
		  "Type": "process.deleted",
		  "EventId": "0766775e9f6847818a6b04c6465c9a8f",
		  "Timestamp": "2018-11-26T14:27:32.2656118Z",
		  "Releases": [
		    {
		      "Id": 363,
		      "Key": "8a3db114-69c3-4b67-a8e7-7a5985bde461",
		      "ProcessKey": "BlankProcess_2",
		      "ProcessVersion": "1.0.6899.31694",
		      "Name": "BlankProcess_2_all",
		      "Description": "BlankProcess description",
		      "IsLatestVersion": false,
		      "Environment": {
		        "Id": 332,
		        "Name": "all"
		      },
		      "InputArguments": {
		        "a": "arg_value_a",
		        "b": "arg_value_b"
		      }
		    }
		  ],
		  "TenantId": 1,
		  "UserId": 2
		},
	"schedule.failed":{
		  "Type": "schedule.failed",
		  "EventId": "990cfc99f9174d70a6831f06f42d36dd",
		  "Timestamp": "2018-11-26T14:13:05.4013596Z",
		  "ProcessSchedule": {
		    "Id": 134,
		    "Name": "aProcess",
		    "Enabled": true,
		    "EnvironmentId": "1",
		    "EnvironmentName": "3bf688c8-01e",
		    "StartProcessCron": "5/20 * * * * ? *",
		    "StartStrategy": "Specific",
		    "ExternalJobKey": "b8abfb7d-22ef-4b90-9976-d85da1d3ce63",
		    "TimeZoneId": "UTC",
		    "TimeZoneIana": "Etc/UTC",
		    "UseCalendar": false,
		    "Release": {
		      "Id": 134,
		      "Key": "6205f5a8-d702-4feb-98ec-d43534ef0f89",
		      "ProcessKey": "Args_AddNumbers"
		    },
		    "ExecutorRobots": [],
		    "InputArguments": {
		      "x": 100,
		      "y": 50
		    }
		  },
		  "Reason": "The robots already have pending jobs for this Process",
		  "TenantId": 1,
		  "OrganizationUnitId": 1
		}
}