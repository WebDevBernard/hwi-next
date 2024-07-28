import qs from "qs";
import { flattenAttributes, getStrapiURL } from "@/lib/utils";

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
  try {
    const response = await fetch(url, { cache: "no-store" }); // delete the no cache option otherwise will dynamic render page
    const data = await response.json();

    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

export async function getHomePageData() {
  const url = new URL("/api/home-page", baseUrl);
  url.search = qs.stringify({
    populate: {
      blocks: {
        populate: {
          image: {
            fields: ["name", "url"],
          },
          links: {
            populate: true,
          },
          features: {
            populate: {
              icon: {
                fields: ["name", "url"],
              },
            },
          },
          quote: {
            populate: true,
          },
          location: {
            populate: true,
          },
          carousel: {
            fields: ["name", "url"],
          },
        },
      },
    },
  });

  return await fetchData(url.href);
}

// responsible for fetching the header and footer links
export async function getGlobalData() {
  const url = new URL("/api/global", baseUrl);
  url.search = qs.stringify({
    populate: {
      header: {
        populate: {
          logoText: {
            populate: {
              icon: {
                fields: ["name", "url"],
              },
            },
          },
          quote: {
            populate: false,
          },
          hamburgerMenu: {
            populate: {
              icon: {
                fields: ["name", "url"],
              },
            },
          },
        },
      },
      footer: {
        populate: {
          icon: {
            fields: ["name", "url"],
          },
          hoursLocation: true,
        },
      },
      menuHeadings: {
        populate: {
          subMenuHeadings: {
            populate: ["name", "url"],
          },
        },
      },
    },
  });

  return await fetchData(url.href);
}

export async function getGlobalPageMetadata() {
  const url = new URL("/api/global", baseUrl);

  url.search = qs.stringify({
    fields: ["title", "description"],
  });

  return await fetchData(url.href);
}
