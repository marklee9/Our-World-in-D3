const header = {
  "Date": "Tue, 21 Aug 2018 16:49:20 GMT",
  "Content-Encoding": "gzip",
  "Vary": "Accept",
  "Server": "nginx/1.10.2",
  "Allow": "OPTIONS, GET",
  "X-Cache": "Miss from cloudfront",
  "Content-Type": "application/json",
  "Via": "1.1 73b5e08c6138e8537ea4c8edfef5e6df.cloudfront.net (CloudFront)",
  "Cache-Control": "max-age=3600",
  "Connection": "keep-alive",
  "Content-Length": "1572",
  "X-Amz-Cf-Id": "2Y9m2hrPp6BFw4ypOz1Qy3mHr5YWz-HASmP2b0LPFiDfl9AuQi5QCQ==",
  "Expires": "Tue, 21 Aug 2018 17:49:20 GMT"
};

fetch("http://api.population.io:80/1.0/countries", header)
  .then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
  });