
// export function getOffset(currentPage:Number = 1, listPerPage:Number): Number {
//   return (currentPage - 1) * listPerPage];
// }

export function emptyOrRows(rows:number) {
  if (!rows) {
    return [];
  }
  return rows;
}

export const capitalize = (s:string) => {
  if (typeof s !== 'string') return '';
  return s.trim().charAt(0).toUpperCase() + s.slice(1);
};

// Returns response info
export const responseInfo = (rCode:number, rState:string, rData:any, rMessage:string) => {
  return { rCode, rState, rData, rMessage };
};

// Returns a Backend response object
export const responseObject = (response:any, code:number, state:string, data:any, message:string) => {
  if (state === 'error' || (state === 'success' && !data)) {
    return response.status(code).json({
      status: state,
      message: message,
    });
  } else {
    return response.status(code).json({
      status: state,
      resultCount: data ? data.length : 0,
      data: data,
      message: message,
    });
  }
};

export const camelCase2Words = (s:string) => {
  var wordsArr = s.split(/([A-Z][a-z]+)/).filter(function (e:any) {
    return e;
  });
  var words = wordsArr.join(' ');
  return capitalize(words);
};

export const errorObject = (response:any, statusCode:any, message:any) => {
  return response.status(statusCode).json({
    status: 'error',
    message: message,
  });
};



