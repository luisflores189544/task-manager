Vue.component('add-discussion', {
    props: [ 'discussion_count', 'desc-toggles'],
    data: function() {
        return {
            id: null,
            date: null,
            expandObject: null,
            desc_hidden: false,
        }
    },
    mounted() {
        this.id = 'discussion' + this._uid,
        this.date = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
        this.expandObject = {
            'oi-chevron-bottom': true,
            'oi-chevron-right': false,
            'oi': true
        }
        
    },
    methods: {
        descToggle: function(event) {
            let id = event['path'][4].getElementsByTagName('textarea')[0].id;
            this.desc_hidden = (this.desc_hidden === false) ? true: false;
            this.setExpendObject(this.desc_hidden)
            let desc_textbox = document.getElementById(id);
            if (this.desc_hidden === false) {
                desc_textbox.style.display = "block";
            } else {
                desc_textbox.style.display = "none";
            }
        },

        setExpendObject: function(hiddenStatus) {
            if (hiddenStatus === false) {
                this.expandObject['oi-chevron-bottom'] = true;
                this.expandObject['oi-chevron-right'] = false;
            } else {
                this.expandObject['oi-chevron-bottom'] = false;
                this.expandObject['oi-chevron-right'] = true;
            }
        }
    },  
    template: `
        <div class="form-group pt-4 pd-3">
            <div class="x1-box">
                <div class="row">
                    <label for="discInput">Posted [%date%]</label>
                    <div class="ml-auto">
                        <a v-on:click="descToggle" href="#">
                            <span v-bind:class="expandObject"></span>
                        </a>
                    </div>
                </div>
                <textarea class="form-control x1-form-config x1-textbox" :id="id" :name="id">
                </textarea>
            </div>
        </div>
    `,
    delimiters: ["[%", "%]"]
});

const task = new Vue({
    el:'#new-task',
    data: {
        owners: [
            '',
            'Mike Smith',
            'Joe Piper',
            'Liz Jones',
            'Kia Knowns'
        ],
        status_type: [
            '',
            'Not Started',
            'In Progress',
            'Completed',
            'Cancel',
            'Hold'
        ],
        priority_type: [
            '',
            'Low',
            'Medium',
            'High'
        ],
        desc_hidden: false,
        expandObject: {
            'oi-chevron-bottom': true,
            'oi-chevron-right': false,
            'oi': true,
        },
        discussion_count: 0
    },
    delimiters: ["[%", "%]"],

    methods: {
        descToggle: function(event) {
            let id = event['path'][4].getElementsByTagName('textarea')[0].id;
            this.desc_hidden = (this.desc_hidden === false) ? true: false;
            this.setExpendObject(this.desc_hidden)
            let desc_textbox = document.getElementById(id);
            if (this.desc_hidden === false) {
                desc_textbox.style.display = "block";
            } else {
                desc_textbox.style.display = "none";
            }
        },

        setExpendObject: function(hiddenStatus) {
            if (hiddenStatus === false) {
                this.expandObject['oi-chevron-bottom'] = true;
                this.expandObject['oi-chevron-right'] = false;
            } else {
                this.expandObject['oi-chevron-bottom'] = false;
                this.expandObject['oi-chevron-right'] = true;
            }
        },

        addDiscussion: function() {
            this.discussion_count += 1;
        }
    }
});

