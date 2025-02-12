import {ref} from "vue";

const kurse = ref([
    {
        title: "Plutonische Mineralien",
        description: "Lehre über Mineralien von Pluto",
        lecturer: "Obi Wan Orbi",
        room: "R2D2",
        day: "Montag",
        time: "10:00"
    },
    {
        title: "Xenolinguistik",
        description: "Grundlagen der Xenolinguistik",
        lecturer: "Dark Vader",
        room: "C3PO",
        day: "Mittwoch",
        time: "12:00"
    },
    {
        title: "Subraum",
        description: "Konzepte des atomaren Subraums",
        lecturer: "Sheev Senate",
        room: "BB8",
        day: "Freitag",
        time: "14:00"
    }
])

export default kurse;
