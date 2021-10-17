(function () {
    const controllers = document.querySelectorAll('[aria-controls]');

    if (!controllers) {
        return;
    }

    var clickHandler = function () {
        let target = document.querySelector('#' + this.getAttribute('aria-controls'));

        if (!target) {
            console.error(`Target #${this.getAttribute('aria-controls')} not found`);
            return;
        }

        target.setAttribute(
            'aria-hidden',
            target.getAttribute('aria-hidden') == 'true' ? 'false' : 'true'
        );

        document.querySelectorAll(`[aria-controls="${target.id}"]`).forEach(controller => {
            controller.setAttribute(
                'aria-expanded',
                target.getAttribute('aria-hidden') === 'true' ? 'false' : 'true'
            );
        });

        // Focus the first form field in the Target if there is one
        if (target.getAttribute('aria-hidden') === 'false' && target.querySelector('input')) {
            let field_focused = false;
            const inputs = target.getElementsByTagName('input')
            if (inputs.length) {
                Array.from(inputs).map(field => {
                    if (field_focused) {
                        return;
                    }
                    let style = window.getComputedStyle(field);
                    if (!(style.display === 'none' || style.visibility === 'hidden')) {
                        target.querySelector('input').focus();
                        field_focused = true;
                    }
                });
            }
        }

        if (!!target.dataset.rootStyle && target.dataset.rootStyle !== '') {
            if (target.getAttribute('aria-hidden') === 'false') {
                document.documentElement.classList.add(target.dataset.rootStyle);
            } else {
                document.documentElement.classList.remove(target.dataset.rootStyle);
            }
        }
    };

    controllers.forEach(controller => {
        controller.addEventListener('click', clickHandler);
    });
})();
