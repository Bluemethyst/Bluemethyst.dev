<template>
    <div class="terminal">
        <div class="terminal-header">
            <span class="terminal-title">{{ terminalName }}</span>
        </div>
        <div class="terminal-body">
            <pre class="terminal-content">
                <span><pre></pre><span class="blue">blue@workstation:~$ </span>{{ displayedCommand }}</span><span v-if="!commandFinished" class="cursor">_</span>
                <span>{{ displayedcontent }}</span><span v-if="commandFinished" class="cursor">_</span>
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    name: "Terminal",
    props: {
        command: {
            type: String,
            default: "enter a command",
        },
        content: {
            type: String,
            default: "enter content",
        },
        terminalName: {
            type: String,
            default: "enter terminal name",
        },
    },
    data() {
        return {
            displayedCommand: "",
            displayedcontent: "",
            commandIndex: 0,
            contentIndex: 0,
            commandFinished: false,
            contentFinished: false,
            commandTypingSpeed: 100,
            contentTypingSpeed: 5,
        };
    },
    mounted() {
        this.typeCommand();
    },
    methods: {
        typeCommand() {
            if (this.commandIndex < this.command.length) {
                this.displayedCommand += this.command[
                    this.commandIndex
                ].replace(/(\r\n|\n|\r)/gm, "");
                this.commandIndex++;
                setTimeout(this.typeCommand, this.commandTypingSpeed);
            } else {
                this.commandFinished = true;
                this.typecontent();
            }
        },
        typecontent() {
            if (this.contentIndex < this.content.length) {
                this.displayedcontent += this.content[this.contentIndex];
                this.contentIndex++;
                setTimeout(this.typecontent, this.contentTypingSpeed);
            } else {
                this.contentFinished = true;
            }
        },
    },
};
</script>

<style scoped>
@import url("/src/assets/base.css");

.terminal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 800px;
    height: 60%;
    background-color: rgba(0, 0, 0, 0.8);
    color: var(--text-color);
    font-family: var(--font-family);
    display: flex;
    flex-direction: column;
    border: 2px solid var(--accent-color);
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.terminal-header {
    background-color: rgba(0, 0, 0, 0.9);
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid var(--accent-color);
}

.terminal-title {
    font-size: 1.5rem;
}

.terminal-body {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
    font-size: 1.2rem;
}

.terminal-content {
    white-space: pre-wrap;
}

.cursor {
    display: inline-block;
    margin-left: 2px;
    width: 10px;
    background-color: var(--text-color);
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

.blue {
    color: var(--accent-color);
    background-color: rgba(0, 0, 0, 0);
}
</style>
