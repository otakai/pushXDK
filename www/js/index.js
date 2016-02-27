/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var gaPlugin;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        gaPlugin = window.plugins.gaPlugin;
        gaPlugin.init(
            function (result) { $("#console").append('<p>' + 'AGPlugin: ' + result + '</p>'); }, 
            function (error) { $("#console").append('<p>' + 'AGPlugin: ' + error + '</p>');	},
            "UA-74154522-1", 10);
        
        var push = PushNotification.init({
            "android": {
                "senderID": "159951744035",
                "sound": "true", "vibrate": "true", "forceShow": "true"},
            "ios": {"alert": "true", "badge": "true", "sound": "true"}, 
            "windows": {} 
        });
        
        push.on('registration', function(data) {
            $("#console").append('<p>' + 'Evento Registrado' + '</p>');
            $("#regid").append('<p>' + data.registrationId + '</p>');
        });

        push.on('notification', function(data) {
            $("#console").append('<p>' + 'notification event' + '</p>');
            $("#console").append('<p>' + JSON.stringify(data) + '</p>');

            var cards = document.getElementById("cards");
            var card = '<div class="row">' +
		  		  '<div class="col s12 m6">' +
				  '  <div class="card darken-1">' +
				  '    <div class="card-content black-text">' +
				  '      <span class="card-title black-text">' + data.title + '</span>' +
				  '      <p>' + data.message + '</p>' +
				  '    </div>' +
				  '  </div>' +
				  ' </div>' +
				  '</div>';
            cards.innerHTML += card;
            
            push.finish(function () {
                $("#console").append('<p>' + 'finish successfully called' + '</p>');
            });
        });

        push.on('error', function(e) {
            $("#console").append('<p>' + 'push error' + '</p>');
        });
        
        PushNotification.hasPermission(function(data) {
            if (data.isEnabled) {
                $("#console").append('<p>' + 'Tem Permissão' + '</p>');
            }
        });
    }
};

$("#console").append('<p>' + 'Aplicativo Iniciado' + '</p>');
$("#console").append('<p>' + 'APP de TESTE de PUSH NOTIFICATION' + '</p>');
app.initialize();