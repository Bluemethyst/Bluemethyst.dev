<template>
    <div class="title-container">
        <h1 class="title">
            {{ displayedText
            }}<span v-if="!subtitleTyping && !titleFinished" class="cursor"
                >_</span
            >
        </h1>
        <h2 class="subtitle">
            {{ displayedSubtitle
            }}<span v-if="titleFinished" class="cursor">_</span>
        </h2>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
        },
        typingSpeed: {
            type: Number,
            default: 150,
        },
        subtitleText: {
            type: String,
            required: false,
            default: "",
        },
        subtitleTypingSpeed: {
            type: Number,
            default: 100,
        },
    },
    data() {
        return {
            displayedText: "",
            currentIndex: 0,
            displayedSubtitle: "",
            subtitleIndex: 0,
            titleFinished: false,
            subtitleTyping: false,
        };
    },
    mounted() {
        this.typeText();
    },
    methods: {
        typeText() {
            if (this.currentIndex < this.text.length) {
                this.displayedText += this.text[this.currentIndex];
                this.currentIndex++;
                setTimeout(this.typeText, this.typingSpeed);
            } else {
                this.titleFinished = true;
                if (this.subtitleText) {
                    this.subtitleTyping = true;
                    this.typeSubtitle();
                }
            }
        },
        typeSubtitle() {
            if (this.subtitleIndex < this.subtitleText.length) {
                this.displayedSubtitle += this.subtitleText[this.subtitleIndex];
                this.subtitleIndex++;
                setTimeout(this.typeSubtitle, this.subtitleTypingSpeed);
            } else {
                this.subtitleTyping = false;
            }
        },
    },
};
</script>

<style scoped>
@import url("/src/assets/base.css");

.title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: var(--text-color);
    font-family: var(--font-family);
    text-align: center;
    padding: 0 1rem;
}

.title {
    font-size: 2rem;
}

.subtitle {
    font-size: 1.5rem;
    max-width: 100%;
    word-wrap: break-word;
}

.cursor {
    display: inline-block;
    margin-left: 2px;
    width: 10px;
    background-color: var(--background-color);
    animation: blink 1s infinite;
}

@keyframes blink {
    0%,
    50% {
        opacity: 1;
    }
    50%,
    100% {
        opacity: 0;
    }
}
</style>
