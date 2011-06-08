var demo = demo || {};

(function () {
    
    demo.toggleButtonView = function(buttonId, synth) {
        var that = {
            model: {
                isPlaying: false
            },
            synth: synth,
            button: document.getElementById(buttonId)
        };
        
        // Wire it up to a button on the page.
        that.button.addEventListener("click", function (e) {
            if (!that.model.isPlaying) {
                that.button.innerHTML = "Pause";
                that.synth.play();
                that.model.isPlaying = true;
            } else {
                that.button.innerHTML = "Play";
                that.synth.stop();
                that.model.isPlaying = false;
            }
        }, false);
        
        return that;
    };
    
    demo.synthDefEditorView = function (editorId, buttonId) {
        var that = {
            model: {
                isPlaying: false
            },
            editor: document.getElementById(editorId),
            button: document.getElementById(buttonId)
        };
        
        that.button.addEventListener("click", function (e) {
            if (!that.model.isPlaying) {
                that.button.innerHTML = "Pause";
                var editorVal = that.editor.value;
                var synthDef = JSON.parse(editorVal);
                that.synth = flock.synth(synthDef);
                that.synth.play();
                that.model.isPlaying = true;
            } else {
                that.button.innerHTML = "Play";
                that.synth.stop();
                that.model.isPlaying = false;
            }
            e.preventDefault();
        }, false);

        return that;
    };
    
})();