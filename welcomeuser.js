<!DOCTYPE html>
<!--
    Copyright (c) 2012-2016 Adobe Systems Incorporated. All rights reserved.

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
     KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
-->
<html>

<head>
    <meta charset="utf-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width" />
    <!-- This is a wide open CSP declaration. To lock this down for production, see below. -->
    <meta http-equiv="Content-Security-Policy" content="default-src * 'unsafe-inline'; style-src 'self' 'unsafe-inline'; media-src *" />
    <!-- Good default declaration:
    * gap: is required only on iOS (when using UIWebView) and is needed for JS->native communication
    * https://ssl.gstatic.com is required only on Android and is needed for TalkBack to function properly
    * Disables use of eval() and inline scripts in order to mitigate risk of XSS vulnerabilities. To change this:
        * Enable inline JS: add 'unsafe-inline' to default-src
        * Enable eval(): add 'unsafe-eval' to default-src
    * Create your own at http://cspisawesome.com
    -->
    <!-- <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: 'unsafe-inline' https://ssl.gstatic.com; style-src 'self' 'unsafe-inline'; media-src *" /> -->

    <link rel="stylesheet" type="text/css" href="css/index.css" />
    <title>Hello World</title>
</head>

<body>
	<form>
	what's your name?:<br><input id=user1 type="text" onblur="welcomeuser1()" ><br>
	</form>
	<p id=currentPlayer hidden></p>
	<p id=p1></p>
    <script type="text/javascript" src="welcomuser1()"></script>
    <script type="text/javascript" src="cordova.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
    <script>
        app.initialize();
    </script>
</body>

</html>

	
	<!-- What's your name?<input type="text" id ="name1" name="yname" onfocusout="welcomeuser()"><br> <button type="text"  onclick="username()" value="Submit">
	<script type="text/javascript" src="welcomeuser.js"></script> -->
	<!-- <p id="Welcome">Welcome </p> -->