import artwork_database from '../data/artwork-data-example.json';
import artist_database_raw from '../data/artist-data-v2.json';
import image_database from '../data/image-data-v3.json';

const artist_database = artist_database_raw;

/* TODO: Sort by ...something
/*
// default sort artists by: last name a-z
artist_database.sort((a, b) => {
  // > strip out last name
  let nameA = a["Name"].trim().split(" ");
  nameA = nameA[nameA.length - 1];
  console.log( nameA );

  let nameB = b["Name"].trim().split(" ");
  nameB = nameB[nameB.length - 1];
  console.log( nameB );

  // > compare names
  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0; 
});
*/

export function get_all_artists() {
  return artist_database;
}

export function get_all_artwork() {
  return artwork_database;
}

export function get_all_images() {
  return image_database["@graph"];
}

/* FILENAME CHANGED */
/* before it fricked my filenames up */
/* by turning them into hashs but not updating the json */

/*
export function get_image_path( filename ) {
  return `/images/${ filename }`;
}
*/

/*
export function get_artist_images( artist_name ) {
  // get all related images
  const images = get_all_images().filter( item => {
    if ( item.tag !== undefined ) {
      return item.tag.includes( artist_name );
    }
  });

  // strip out filename
  const filenames = images.map( image => {
    return get_image_path( image.photo[0].filename );
  });

  return filenames;
}
*/



/* and now after, using the checksum value */
/*
export function get_image_path( checksum ) {
  return `/images/${ checksum }.jpg`;
}

export function get_artist_images( artist_name ) {
  // get all related images
  const images = get_all_images().filter( item => {
    return ( item["creator"] == artist_name );
  });

  // strip out filename
  const filenames = images.map( image => {
    return get_image_path( image.photo[0].checksum );
  });

  return filenames;
}

// takes single tag and gets photos that match
export function get_tagged_images( tag ) {
  // get all tagged images
  const images = get_all_images().filter( item => {
    // filter out untagged photos from causing error
    if ( item.tag !== undefined ) {
      return item.tag.includes( tag );
    }
  });
  
  // get path
  const filenames = images.map( image => {
    return get_image_path( image.photo[0].checksum );
  });

  return filenames;
}
*/



/* and now using dynamic imports??! */
/* only thing I really changed was the image path */

export function get_image_path( checksum ) {
  return `/src/assets/images/${ checksum }.jpg`;
}

export function get_artist_images( artist_name ) {
  // get all related images
  const images = get_all_images().filter( item => {
    return ( item["creator"] == artist_name );
  });

  // strip out filename
  const filenames = images.map( image => {
    return get_image_path( image.photo[0].checksum );
  });

  return filenames;
}

// takes single tag and gets photos that match
export function get_tagged_images( tag ) {
  // get all tagged images
  const images = get_all_images().filter( item => {
    // filter out untagged photos from causing error
    if ( item.tag !== undefined ) {
      return item.tag.includes( tag );
    }
  });
  
  // get path
  const filenames = images.map( image => {
    return get_image_path( image.photo[0].checksum );
  });

  return filenames;
}
