// import Data from '../modules/data'
import config from '../Config/config'

class InputScene extends Phaser.Scene {


    preload(){
        this.load.html('nameform', 'assets/form.html');
    }

    create (){
    // this.scene.remove('Title')

    var self = this

    var text = this.add.text(config.width/3.3, 10, 'Please enter your name', { color: 'white', fontFamily: 'Arial', fontSize: '32px '});

    var element = this.add.dom(400, 600).createFromCache('nameform');



    element.setPerspective(800);

    element.addListener('click');

    element.on('click', function (event) {

        if (event.target.name === 'loginButton')
        {
            var inputUsername = this.getChildByName('username');

            //  Have they entered anything?
            if (inputUsername.value !== '')
            {
                //  Turn off the click events
                this.removeListener('click');

                //  Tween the login form out
                this.scene.tweens.add({ targets: element.rotate3d, x: 1, w: 90, duration: 3000, ease: 'Power3' });

                this.scene.tweens.add({ targets: element, scaleX: 2, scaleY: 2, y: 700, duration: 3000, ease: 'Power3',
                    onComplete: function ()
                    {
                        element.setVisible(false);
                    }
                });

                //  Populate the text with whatever they typed in as the username!
                // Data.nameSetter(inputUsername.value)

                self.scene.start('Game')

            }
            else
            {
                //  Flash the prompt
                this.scene.tweens.add({ targets: text, alpha: 0.1, duration: 200, ease: 'Power3', yoyo: true });
            }
        }

    });

      this.tweens.add({
          targets: element,
          y: 300,
          duration: 3000,
          ease: 'Power3'
      });
  }
}

export default {
  InputScene
}
