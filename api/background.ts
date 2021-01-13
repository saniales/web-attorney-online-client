export const enum BackgroundItemType {
    DefenseDesk = "defensedesk",
    DefenseEmpty = "defenseempty",
    HelperStand = "helperstand",
    JudgeStand = "judgestand",
    ProsecutorHelperStand = "prohelperstand",
    ProsecutionDesk = "prosecutiondesk",
    ProsecutorEmpty = "prosecutorempty",
    Stand = "stand",
    WitnessEmpty = "witnessempty",
}

export type Background = {
    [name: string] : string[] // from BackgroundItemType
}