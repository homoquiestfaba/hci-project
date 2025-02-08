import {ref} from "vue";

const kurse = ref([
    {
        title: "University",
        description: "Eine Kursbeschreibung",
        lecturer: "Obi Wan Orbi",
        room: "R2D2",
        day: "Montag",
        time: "10:00"
    },
    {
        title: "University2",
        description: "Noch eine Kursbeschreibung",
        lecturer: "Dark Vader",
        room: "C3PO",
        day: "Mittwoch",
        time: "12:00"
    },
    {
        title: "University3",
        description: "Noch eine weitere Kursbeschreibung",
        lecturer: "The Senate",
        room: "BB8",
        day: "Freitag",
        time: "14:00"
    }
])

export default kurse;
