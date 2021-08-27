import sanityClient from "@sanity/client";

// projectId found in sanity.json
export default sanityClient({
  projectId: "dkxauvcq",
  dataset: "production",
});
