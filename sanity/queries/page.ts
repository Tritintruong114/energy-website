import { groq } from "next-sanity";
import { client } from "../lib/client";

export async function getHomepage() {
  const getPageQuery = groq`*[_type == "page"][slug == 'home'][0]{
    slug,

    'hero':pageBuilder[][_type == "hero"][0]{
      'heroImage':image.asset->url,
      heading,
      tagline
    },

    'promotion':pageBuilder[][_type == "promotion"][0]{
      link,
      title
    },

      'gallery':pageBuilder[][_type == "gallery"][0]{
      _type,
      'imageUrls':images[].asset->{
        'url':url
      }
    },
      'solutions':pageBuilder[][_type == "solutions"][0]{
      heading,
      tagline,
      cta,
      solutions
    },
    'aboutUs':pageBuilder[][_type == "aboutUs"][0]{
      heading,
      tagline,
      excerpt,
      cta,
      'slider':slider.images[].asset->{
        'url':url
      }
    },
    'metrics':pageBuilder[][_type == "metrics"][0]{
      heading,
      tagline,
      'metrics':Metrics[]
    },
    'ourExperts':pageBuilder[][_type == "ourExperts"][0]{
      heading,
      tagline,
      excerpt,
      'ourExperts':ourExperts[]{
      'link': cta.link, 
      'image': image.asset-> url,
      tagline,
      heading
      }
    },

    'testimonials':pageBuilder[][_type == "testimonials"][0]{
      heading,
      tagline,
      Testimonials[]{
        excerpt,
        heading,
        tagline,
        'image': image.asset-> url
      }
    },
  
}`;

  return await client.fetch(getPageQuery, {
    revalidate: new Date().getSeconds(),
  });
}
export async function getAboutpage() {
  const getPageQuery = groq`*[_type == "page"][slug == 'about-us'][0]{
    slug,

    'hero':pageBuilder[][_type == "hero"][0]{
      heading,
      tagline,
      'heroImage':image.asset->url,

    },

    'promotion':pageBuilder[][_type == "promotion"][0]{
      link,
      title
    },
    'ourPhilosophy':pageBuilder[][_type == 'ourPhilosophy'][0]
    {
      heading,
      cta,
      philosophys[]
      {
        heading,
        tagline,
        excerpt
      }

    },
        'aboutUs':pageBuilder[][_type == 'aboutUs'][0]
    {

      aboutUsContentLeft[],
      aboutUsContentRight[],
      'aboutUsImageLeft':aboutUsImageLeft.asset->url,
      'aboutUsImageRight':aboutUsImageRight.asset->url
    },

    'ourExperts':pageBuilder[][_type == "ourExperts"][0]{
      heading,
      tagline,
      excerpt,
      'ourExperts':ourExperts[]{
      'link': cta.link, 
      'image': image.asset-> url,
      tagline,
      heading
      }
    },
  
}`;

  return await client.fetch(getPageQuery, {
    revalidate: new Date().getSeconds(),
  });
}
