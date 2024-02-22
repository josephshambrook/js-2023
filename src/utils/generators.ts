export const generateAmazonAssociatesLink = (
  asin: string,
  tag: string = "josephshamb0e-21",
) => {
  return `https://www.amazon.co.uk/dp/${asin}/ref=nosim?tag=${tag}`;
};
