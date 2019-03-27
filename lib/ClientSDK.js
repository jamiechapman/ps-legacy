'use strict';

var semver = require('semver');

function compatible(compatibleSDK) {
  return function (clientSDK) {
    if (typeof clientSDK === 'string') {
      clientSDK = fromString(clientSDK);
    }
    // REST API, or custom SDK
    if (!clientSDK) {
      return true;
    }
    const clientVersion = clientSDK.version;
    const compatiblityVersion = compatibleSDK[clientSDK.sdk];
    return semver.satisfies(clientVersion, compatiblityVersion);
  };
}

function supportsForwardDelete(clientSDK) {
  return compatible({
    js: '>=1.9.0'
  })(clientSDK);
}

function fromString(version) {
  const versionRE = /([-a-zA-Z]+)([0-9\.]+)/;
  const match = version.toLowerCase().match(versionRE);
  if (match && match.length === 3) {
    return {
      sdk: match[1],
      version: match[2]
    };
  }
  return undefined;
}

module.exports = {
  compatible,
  supportsForwardDelete,
  fromString
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DbGllbnRTREsuanMiXSwibmFtZXMiOlsic2VtdmVyIiwicmVxdWlyZSIsImNvbXBhdGlibGUiLCJjb21wYXRpYmxlU0RLIiwiY2xpZW50U0RLIiwiZnJvbVN0cmluZyIsImNsaWVudFZlcnNpb24iLCJ2ZXJzaW9uIiwiY29tcGF0aWJsaXR5VmVyc2lvbiIsInNkayIsInNhdGlzZmllcyIsInN1cHBvcnRzRm9yd2FyZERlbGV0ZSIsImpzIiwidmVyc2lvblJFIiwibWF0Y2giLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7O0FBRUEsU0FBU0MsVUFBVCxDQUFvQkMsYUFBcEIsRUFBbUM7QUFDakMsU0FBTyxVQUFTQyxTQUFULEVBQW9CO0FBQ3pCLFFBQUksT0FBT0EsU0FBUCxLQUFxQixRQUF6QixFQUFtQztBQUNqQ0Esa0JBQVlDLFdBQVdELFNBQVgsQ0FBWjtBQUNEO0FBQ0Q7QUFDQSxRQUFJLENBQUNBLFNBQUwsRUFBZ0I7QUFDZCxhQUFPLElBQVA7QUFDRDtBQUNELFVBQU1FLGdCQUFnQkYsVUFBVUcsT0FBaEM7QUFDQSxVQUFNQyxzQkFBc0JMLGNBQWNDLFVBQVVLLEdBQXhCLENBQTVCO0FBQ0EsV0FBT1QsT0FBT1UsU0FBUCxDQUFpQkosYUFBakIsRUFBZ0NFLG1CQUFoQyxDQUFQO0FBQ0QsR0FYRDtBQVlEOztBQUVELFNBQVNHLHFCQUFULENBQStCUCxTQUEvQixFQUEwQztBQUN4QyxTQUFPRixXQUFXO0FBQ2hCVSxRQUFJO0FBRFksR0FBWCxFQUVKUixTQUZJLENBQVA7QUFHRDs7QUFFRCxTQUFTQyxVQUFULENBQW9CRSxPQUFwQixFQUE2QjtBQUMzQixRQUFNTSxZQUFZLHdCQUFsQjtBQUNBLFFBQU1DLFFBQVFQLFFBQVFRLFdBQVIsR0FBc0JELEtBQXRCLENBQTRCRCxTQUE1QixDQUFkO0FBQ0EsTUFBSUMsU0FBU0EsTUFBTUUsTUFBTixLQUFpQixDQUE5QixFQUFpQztBQUMvQixXQUFPO0FBQ0xQLFdBQUtLLE1BQU0sQ0FBTixDQURBO0FBRUxQLGVBQVNPLE1BQU0sQ0FBTjtBQUZKLEtBQVA7QUFJRDtBQUNELFNBQU9HLFNBQVA7QUFDRDs7QUFFREMsT0FBT0MsT0FBUCxHQUFpQjtBQUNmakIsWUFEZTtBQUVmUyx1QkFGZTtBQUdmTjtBQUhlLENBQWpCIiwiZmlsZSI6IkNsaWVudFNESy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBzZW12ZXIgPSByZXF1aXJlKCdzZW12ZXInKTtcblxuZnVuY3Rpb24gY29tcGF0aWJsZShjb21wYXRpYmxlU0RLKSB7XG4gIHJldHVybiBmdW5jdGlvbihjbGllbnRTREspIHtcbiAgICBpZiAodHlwZW9mIGNsaWVudFNESyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNsaWVudFNESyA9IGZyb21TdHJpbmcoY2xpZW50U0RLKTtcbiAgICB9XG4gICAgLy8gUkVTVCBBUEksIG9yIGN1c3RvbSBTREtcbiAgICBpZiAoIWNsaWVudFNESykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGNsaWVudFZlcnNpb24gPSBjbGllbnRTREsudmVyc2lvbjtcbiAgICBjb25zdCBjb21wYXRpYmxpdHlWZXJzaW9uID0gY29tcGF0aWJsZVNES1tjbGllbnRTREsuc2RrXTtcbiAgICByZXR1cm4gc2VtdmVyLnNhdGlzZmllcyhjbGllbnRWZXJzaW9uLCBjb21wYXRpYmxpdHlWZXJzaW9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdXBwb3J0c0ZvcndhcmREZWxldGUoY2xpZW50U0RLKSB7XG4gIHJldHVybiBjb21wYXRpYmxlKHtcbiAgICBqczogJz49MS45LjAnXG4gIH0pKGNsaWVudFNESyk7XG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcodmVyc2lvbikge1xuICBjb25zdCB2ZXJzaW9uUkUgPSAvKFstYS16QS1aXSspKFswLTlcXC5dKykvO1xuICBjb25zdCBtYXRjaCA9IHZlcnNpb24udG9Mb3dlckNhc2UoKS5tYXRjaCh2ZXJzaW9uUkUpO1xuICBpZiAobWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID09PSAzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNkazogbWF0Y2hbMV0sXG4gICAgICB2ZXJzaW9uOiBtYXRjaFsyXVxuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY29tcGF0aWJsZSxcbiAgc3VwcG9ydHNGb3J3YXJkRGVsZXRlLFxuICBmcm9tU3RyaW5nXG59XG4iXX0=