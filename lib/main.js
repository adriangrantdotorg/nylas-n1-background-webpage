'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.activate = activate;
exports.serialize = serialize;
exports.deactivate = deactivate;

var _nylasExports = require('nylas-exports');


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Activate is called when the package is loaded. If your package previously
// saved state using `serialize` it is provided.
//
function activate() {
  const BrowserWindow = require('electron').remote.BrowserWindow;
  //Place your URL below
  const url = 'http://twitter.com';

  const browserWindow = new BrowserWindow({
      width: 1000,
      height: 800,
      center: true,
  });

  browserWindow.on('closed', () => {
      callback(null, true);
  });

  // // Useful for development and monitoring action of browserWindow
  // // Especially since N1 doesn't allow injecting a custom script
  // browserWindow.on('page-title-updated', function(event) {
  //    webContents = browserWindow.webContents;
  //    if (!webContents.isDevToolsOpened()) {
  //        webContents.openDevTools();
  //    }
  // });

  browserWindow.loadURL(url);
  browserWindow.show();
}

// Serialize is called when your package is about to be unmounted.
// You can return a state object that will be passed back to your package
// when it is re-activated.
//
function serialize() {}

// This **optional** method is called when the window is shutting down,
// or when your package is being updated or disabled. If your package is
// watching any files, holding external resources, providing commands or
// subscribing to events, release them here.
//
function deactivate() {

}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1VzZXJzL3RyYXZpcy9idWlsZC9ueWxhcy9OMS9zdGF0aWMvcGFja2FnZS10ZW1wbGF0ZS9saWIvbWFpbi5lczYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFRZ0IsUSxHQUFBLFE7UUFhQSxTLEdBQUEsUztRQVFBLFUsR0FBQSxVOztBQTdCaEI7O0FBRUE7Ozs7QUFDQTs7Ozs7Ozs7O0FBS08sU0FBUyxRQUFULEdBQW9CO0FBQ3pCLGtDQUFrQixRQUFsQiw2QkFBNkM7QUFDM0MsVUFBTTtBQURxQyxHQUE3QztBQUdBLGtDQUFrQixRQUFsQiw2QkFBNkM7QUFDM0MsVUFBTTtBQURxQyxHQUE3QztBQUdEOzs7Ozs7QUFNTSxTQUFTLFNBQVQsR0FBcUIsQ0FDM0I7Ozs7Ozs7QUFPTSxTQUFTLFVBQVQsR0FBc0I7QUFDM0Isa0NBQWtCLFVBQWxCO0FBQ0Esa0NBQWtCLFVBQWxCO0FBQ0QiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50UmVnaXN0cnl9IGZyb20gJ255bGFzLWV4cG9ydHMnO1xuXG5pbXBvcnQgTXlDb21wb3NlckJ1dHRvbiBmcm9tICcuL215LWNvbXBvc2VyLWJ1dHRvbic7XG5pbXBvcnQgTXlNZXNzYWdlU2lkZWJhciBmcm9tICcuL215LW1lc3NhZ2Utc2lkZWJhcic7XG5cbi8vIEFjdGl2YXRlIGlzIGNhbGxlZCB3aGVuIHRoZSBwYWNrYWdlIGlzIGxvYWRlZC4gSWYgeW91ciBwYWNrYWdlIHByZXZpb3VzbHlcbi8vIHNhdmVkIHN0YXRlIHVzaW5nIGBzZXJpYWxpemVgIGl0IGlzIHByb3ZpZGVkLlxuLy9cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZSgpIHtcbiAgQ29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXIoTXlDb21wb3NlckJ1dHRvbiwge1xuICAgIHJvbGU6ICdDb21wb3NlcjpBY3Rpb25CdXR0b24nLFxuICB9KTtcbiAgQ29tcG9uZW50UmVnaXN0cnkucmVnaXN0ZXIoTXlNZXNzYWdlU2lkZWJhciwge1xuICAgIHJvbGU6ICdNZXNzYWdlTGlzdFNpZGViYXI6Q29udGFjdENhcmQnLFxuICB9KTtcbn1cblxuLy8gU2VyaWFsaXplIGlzIGNhbGxlZCB3aGVuIHlvdXIgcGFja2FnZSBpcyBhYm91dCB0byBiZSB1bm1vdW50ZWQuXG4vLyBZb3UgY2FuIHJldHVybiBhIHN0YXRlIG9iamVjdCB0aGF0IHdpbGwgYmUgcGFzc2VkIGJhY2sgdG8geW91ciBwYWNrYWdlXG4vLyB3aGVuIGl0IGlzIHJlLWFjdGl2YXRlZC5cbi8vXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplKCkge1xufVxuXG4vLyBUaGlzICoqb3B0aW9uYWwqKiBtZXRob2QgaXMgY2FsbGVkIHdoZW4gdGhlIHdpbmRvdyBpcyBzaHV0dGluZyBkb3duLFxuLy8gb3Igd2hlbiB5b3VyIHBhY2thZ2UgaXMgYmVpbmcgdXBkYXRlZCBvciBkaXNhYmxlZC4gSWYgeW91ciBwYWNrYWdlIGlzXG4vLyB3YXRjaGluZyBhbnkgZmlsZXMsIGhvbGRpbmcgZXh0ZXJuYWwgcmVzb3VyY2VzLCBwcm92aWRpbmcgY29tbWFuZHMgb3Jcbi8vIHN1YnNjcmliaW5nIHRvIGV2ZW50cywgcmVsZWFzZSB0aGVtIGhlcmUuXG4vL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGUoKSB7XG4gIENvbXBvbmVudFJlZ2lzdHJ5LnVucmVnaXN0ZXIoTXlDb21wb3NlckJ1dHRvbik7XG4gIENvbXBvbmVudFJlZ2lzdHJ5LnVucmVnaXN0ZXIoTXlNZXNzYWdlU2lkZWJhcik7XG59XG4iXX0=
