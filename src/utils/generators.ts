export const generateAmazonAssociatesLink = (
  asin: string,
  tag: string = "josephshamb0a-21"
) => {
  return `https://www.amazon.co.uk/dp/${asin}/ref=nosim?tag=${tag}`;
};
