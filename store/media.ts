export type Media = {
    name: string
    url: string
}

export type MediaState = {
    media_url: string
    music_tracks: Media[]
    general_sounds: Media[]
    character_sounds: { [character: string] : Media[] }
    error?: string
}

export const state : () => MediaState = () => ({
    media_url: "",
    music_tracks: [],
    general_sounds: [],
    character_sounds: {},
})

export const mutations = {
    init_media_url(state: MediaState, assets_url: string) : void {
        state.media_url = `${assets_url}/sounds`
    },
    set_general_sounds(state: MediaState, general_sounds: Media[]) : void {
        state.general_sounds = general_sounds
    },
    set_music_tracklist(state: MediaState, music_tracks: Media[]) : void {
        state.music_tracks = music_tracks
    },
    set_character_sounds(state: MediaState, character: string, sounds: Media[]) {
        state.character_sounds[character] = sounds
    },
    set_error(state: MediaState, error?: string) {
        state.error = error
    }
}
