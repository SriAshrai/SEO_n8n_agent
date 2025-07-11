const inputData = $input.first().json;

return [{
  json: {
    ...inputData,  
    api_request_body: [
      {
        location_code: 2840,
        language_code: "en",
        keywords: inputData.keywords
      }
    ]
  }
}];