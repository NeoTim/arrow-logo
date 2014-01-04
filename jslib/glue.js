// Copyright 2012 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var Glue = function() {
  // This seems a bit roundabout, but calling CodeMirror directly does not
  // work. TODO: isolate the bug and file a report.
  this.showCmEditor = function() {
    var editorElem = document.getElementById("editor");
    return CodeMirror.fromTextArea(editorElem);
  }
  this.hideCmEditor = function(cm) {
    cm.toTextArea();
  }
};
