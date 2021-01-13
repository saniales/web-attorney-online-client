import ini from "ini";

/**
 * CharacterINI represents an INI configuration for a character.
 */
interface CharacterINI {
    Options: {
        name: string
        showname: string
        side: string
        gender: string
        shouts: string
        chat: string
    },
    Time: {
        [animation_path: string]: number
    },
    Emotions: {
        [index: number]: string // index - "nome_sprite#nome_gif_preanimazione-"
        number: number
    },
    SoundN: {
        [key: string]: string
    },
    SoundT: {
        [key: number]: number
    },
}

/**
 * Character represents an Attorney Online playable character.
 */
export interface Character {
    icon_url: string,
    animation_images_url: string[],
    static_images_url: string[],
    animated_images_url: string[],
    sound_effects: {
        [name: string]: [file_url : string]
    }
}

/**
 * Gets a character from an INI file stored in the asset server
 * @param url The url to download the INI file from.
 * @returns The correctly parsed character.
 * @throws with Network errors or parsing errors.
 */
export async function get_character(asset_url: string, character_name: string): Promise<Character> {
    const character_folder_url = `${asset_url}/characters/${character_name}`
    const ini_file_url = `${character_folder_url}/char.ini`

    const downloaded_ini_file_content = await download_ini_file(ini_file_url)
    const character_ini = parse_character_ini_file(downloaded_ini_file_content)

    /*
    const character: Character = {
        icon_url: `${character_folder_url}/char_icon.png`,
        sound_effects: {}, // ancora da fare
        animation_images_url: obtain_animation_images_urls(character_folder_url, character_ini),
    }
    
    return character
    */

    throw "Not implemented" 
}

/**
 * Obtains animation image urls from the asset server and INI character configuration.
 * @param character_folder_url The url of the folder of the character on the asset server.
 * @param character_ini The parsed INI character.
 * @returns The list of animation image urls.
 */
function obtain_animation_images_urls(character_folder_url: string, character_ini: CharacterINI): string[] {
    let image_urls = []
    for (const [emotion_name, _] of Object.entries(character_ini.Time)) {
        image_urls.push(`${character_folder_url}/${emotion_name}.gif`)
    }
    return image_urls
}

/**
 * Downloads an INI file from a given URL.
 * @param url The url to download the INI file from.
 * @returns The downloaded INI file contents.
 * @throws with Network errors or parsing errors.
 */
async function download_ini_file(url: string): Promise<string> {
    const server_response = await fetch(url)
    const downloaded_ini_file_content = await server_response.text()
    return downloaded_ini_file_content
}

/**
 * Parses a string content of an ini file and parses it into a character.
 * @param file_content The content of the downloaded INI file.
 * @return The parsed character.
 * @throws If the file is not correctly parsed.
 */
function parse_character_ini_file(file_content: string): CharacterINI {
    return ini.parse(file_content) as CharacterINI
}