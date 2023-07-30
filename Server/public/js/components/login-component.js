
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteElement, i as init, a as attribute_to_object, b as insert_dev, t as flush, s as safe_not_equal, d as dispatch_dev, v as validate_slots, g as getContext, o as onMount, f as element, h as space, n as noop, k as attr_dev, j as add_location, u as src_url_equal, l as append_dev, m as listen_dev, p as detach_dev, r as run_all, q as binding_callbacks } from './index-998178c7.js';
import * as AuthTools from '../../../../../../../../../js/libraries/authTools.js';

/* src\auth\login-component.svelte generated by Svelte v3.52.0 */
const file = "src\\auth\\login-component.svelte";

function create_fragment(ctx) {
	let div5;
	let h2;
	let t1;
	let label0;
	let span0;
	let t3;
	let input0;
	let t4;
	let div0;
	let label1;
	let span1;
	let t6;
	let input1;
	let t7;
	let button0;
	let object;
	let t8;
	let div1;
	let input2;
	let label2;
	let t10;
	let button1;
	let t12;
	let a;
	let t14;
	let hr;
	let t15;
	let div4;
	let div3;
	let div2;
	let t16;
	let img;
	let img_src_value;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div5 = element("div");
			h2 = element("h2");
			h2.textContent = "LOG IN";
			t1 = space();
			label0 = element("label");
			label0.textContent = "Email ";
			span0 = element("span");
			t3 = space();
			input0 = element("input");
			t4 = space();
			div0 = element("div");
			label1 = element("label");
			label1.textContent = "Password ";
			span1 = element("span");
			t6 = space();
			input1 = element("input");
			t7 = space();
			button0 = element("button");
			object = element("object");
			t8 = space();
			div1 = element("div");
			input2 = element("input");
			label2 = element("label");
			label2.textContent = "remember me";
			t10 = space();
			button1 = element("button");
			button1.textContent = "Log in";
			t12 = space();
			a = element("a");
			a.textContent = "Forgot password?";
			t14 = space();
			hr = element("hr");
			t15 = space();
			div4 = element("div");
			div3 = element("div");
			div2 = element("div");
			t16 = space();
			img = element("img");
			this.c = noop;
			attr_dev(h2, "class", "auth-title");
			add_location(h2, file, 68, 4, 1639);
			attr_dev(label0, "class", "auth-label");
			attr_dev(label0, "for", "emailInput");
			add_location(label0, file, 69, 4, 1679);
			attr_dev(span0, "id", "email-msg");
			add_location(span0, file, 69, 66, 1741);
			attr_dev(input0, "id", "emailInput");
			attr_dev(input0, "class", "authEmailInput");
			attr_dev(input0, "type", "email");
			add_location(input0, file, 70, 4, 1796);
			attr_dev(label1, "class", "auth-label");
			attr_dev(label1, "for", "passwordInput");
			add_location(label1, file, 72, 8, 1922);
			attr_dev(span1, "id", "password-msg");
			add_location(span1, file, 72, 76, 1990);
			attr_dev(input1, "id", "passwordInput");
			attr_dev(input1, "class", "authPasswordInput");
			attr_dev(input1, "type", "password");
			add_location(input1, file, 73, 8, 2055);
			attr_dev(object, "type", "image/svg+xml");
			attr_dev(object, "data", "/img/auth/eye_icon.svg");
			attr_dev(object, "title", "eye icon");
			add_location(object, file, 75, 12, 2316);
			attr_dev(button0, "class", "eye-icon");
			add_location(button0, file, 74, 8, 2160);
			attr_dev(div0, "class", "password-field");
			add_location(div0, file, 71, 4, 1884);
			attr_dev(input2, "type", "checkbox");
			attr_dev(input2, "id", "remember-me-checkbox");
			add_location(input2, file, 79, 8, 2470);
			attr_dev(label2, "id", "remember-me-label");
			attr_dev(label2, "for", "passwordInput");
			add_location(label2, file, 79, 80, 2542);
			attr_dev(div1, "id", "remember-me");
			add_location(div1, file, 78, 4, 2438);
			attr_dev(button1, "class", "auth-button");
			add_location(button1, file, 81, 4, 2629);
			attr_dev(a, "id", "forgot-password");
			attr_dev(a, "href", "forgot-password");
			add_location(a, file, 82, 4, 2726);
			attr_dev(hr, "class", "auth-line");
			add_location(hr, file, 83, 4, 2799);
			attr_dev(div2, "id", "google-btn");
			add_location(div2, file, 86, 12, 2912);
			if (!src_url_equal(img.src, img_src_value = "/img/auth/google_icon.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "id", "google-logo");
			attr_dev(img, "alt", "google icon");
			add_location(img, file, 87, 12, 2978);
			attr_dev(div3, "id", "google-btn-wrapper");
			add_location(div3, file, 85, 8, 2869);
			attr_dev(div4, "class", "auth-methods-group");
			add_location(div4, file, 84, 4, 2827);
			attr_dev(div5, "id", "login-group");
			attr_dev(div5, "class", "pane auth-pane");
			add_location(div5, file, 67, 0, 1589);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div5, anchor);
			append_dev(div5, h2);
			append_dev(div5, t1);
			append_dev(div5, label0);
			append_dev(div5, span0);
			/*span0_binding*/ ctx[10](span0);
			append_dev(div5, t3);
			append_dev(div5, input0);
			/*input0_binding*/ ctx[11](input0);
			append_dev(div5, t4);
			append_dev(div5, div0);
			append_dev(div0, label1);
			append_dev(div0, span1);
			/*span1_binding*/ ctx[12](span1);
			append_dev(div0, t6);
			append_dev(div0, input1);
			/*input1_binding*/ ctx[13](input1);
			append_dev(div0, t7);
			append_dev(div0, button0);
			append_dev(button0, object);
			/*button0_binding*/ ctx[14](button0);
			append_dev(div5, t8);
			append_dev(div5, div1);
			append_dev(div1, input2);
			/*input2_binding*/ ctx[16](input2);
			append_dev(div1, label2);
			append_dev(div5, t10);
			append_dev(div5, button1);
			append_dev(div5, t12);
			append_dev(div5, a);
			append_dev(div5, t14);
			append_dev(div5, hr);
			append_dev(div5, t15);
			append_dev(div5, div4);
			append_dev(div4, div3);
			append_dev(div3, div2);
			/*div2_binding*/ ctx[18](div2);
			append_dev(div3, t16);
			append_dev(div3, img);

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*click_handler*/ ctx[15], false, false, false),
					listen_dev(button1, "click", /*click_handler_1*/ ctx[17], false, false, false)
				];

				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div5);
			/*span0_binding*/ ctx[10](null);
			/*input0_binding*/ ctx[11](null);
			/*span1_binding*/ ctx[12](null);
			/*input1_binding*/ ctx[13](null);
			/*button0_binding*/ ctx[14](null);
			/*input2_binding*/ ctx[16](null);
			/*div2_binding*/ ctx[18](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('login-component', slots, []);
	let { focused = false } = $$props;

	// Main code
	let emailInput;

	let passwordInput;
	let inputs;
	let passwordVisibilityButton;
	let emailMsg;
	let passwordMsg;
	let msgs;
	let rememberMe;
	let googleButton;
	let parentProps = getContext("auth");

	function renderGoogle() {
		if (parentProps.googleInit) {
			google.accounts.id.renderButton(googleButton, { theme: 'outline', size: 'large' });
			let iframe = googleButton.getElementsByTagName('iframe')[0];
			iframe.style.height = "5rem";
			iframe.style.width = "5rem";
		} else {
			setTimeout(renderGoogle, 100);
		}
	}

	onMount(() => {
		$$invalidate(7, rememberMe.checked = true, rememberMe);

		$$invalidate(2, inputs = {
			email: emailInput,
			password: passwordInput,
			remember: rememberMe
		});

		$$invalidate(6, msgs = { email: emailMsg, password: passwordMsg });
		parentProps.msgs = msgs;
		parentProps.remember = rememberMe;
		parentProps.loginGoogle = googleButton;

		document.addEventListener("keypress", function (event) {
			if (event.code == "Enter") {
				if (focused) {
					AuthTools.login(msgs, inputs);
				}
			}
		});

		renderGoogle();
	});

	const writable_props = ['focused'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<login-component> was created with unknown prop '${key}'`);
	});

	function span0_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			emailMsg = $$value;
			$$invalidate(4, emailMsg);
		});
	}

	function input0_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			emailInput = $$value;
			$$invalidate(0, emailInput);
		});
	}

	function span1_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			passwordMsg = $$value;
			$$invalidate(5, passwordMsg);
		});
	}

	function input1_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			passwordInput = $$value;
			$$invalidate(1, passwordInput);
		});
	}

	function button0_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			passwordVisibilityButton = $$value;
			$$invalidate(3, passwordVisibilityButton);
		});
	}

	const click_handler = () => AuthTools.changePasswordVisibility(passwordVisibilityButton);

	function input2_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			rememberMe = $$value;
			$$invalidate(7, rememberMe);
		});
	}

	const click_handler_1 = () => AuthTools.login(msgs, inputs);

	function div2_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			googleButton = $$value;
			$$invalidate(8, googleButton);
		});
	}

	$$self.$$set = $$props => {
		if ('focused' in $$props) $$invalidate(9, focused = $$props.focused);
	};

	$$self.$capture_state = () => ({
		onMount,
		getContext,
		AuthTools,
		focused,
		emailInput,
		passwordInput,
		inputs,
		passwordVisibilityButton,
		emailMsg,
		passwordMsg,
		msgs,
		rememberMe,
		googleButton,
		parentProps,
		renderGoogle
	});

	$$self.$inject_state = $$props => {
		if ('focused' in $$props) $$invalidate(9, focused = $$props.focused);
		if ('emailInput' in $$props) $$invalidate(0, emailInput = $$props.emailInput);
		if ('passwordInput' in $$props) $$invalidate(1, passwordInput = $$props.passwordInput);
		if ('inputs' in $$props) $$invalidate(2, inputs = $$props.inputs);
		if ('passwordVisibilityButton' in $$props) $$invalidate(3, passwordVisibilityButton = $$props.passwordVisibilityButton);
		if ('emailMsg' in $$props) $$invalidate(4, emailMsg = $$props.emailMsg);
		if ('passwordMsg' in $$props) $$invalidate(5, passwordMsg = $$props.passwordMsg);
		if ('msgs' in $$props) $$invalidate(6, msgs = $$props.msgs);
		if ('rememberMe' in $$props) $$invalidate(7, rememberMe = $$props.rememberMe);
		if ('googleButton' in $$props) $$invalidate(8, googleButton = $$props.googleButton);
		if ('parentProps' in $$props) parentProps = $$props.parentProps;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		emailInput,
		passwordInput,
		inputs,
		passwordVisibilityButton,
		emailMsg,
		passwordMsg,
		msgs,
		rememberMe,
		googleButton,
		focused,
		span0_binding,
		input0_binding,
		span1_binding,
		input1_binding,
		button0_binding,
		click_handler,
		input2_binding,
		click_handler_1,
		div2_binding
	];
}

class Login_component extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>@import '/css/common.css';@import '/css/auth.css';</style>`;

		init(
			this,
			{
				target: this.shadowRoot,
				props: attribute_to_object(this.attributes),
				customElement: true
			},
			instance,
			create_fragment,
			safe_not_equal,
			{ focused: 9 },
			null
		);

		if (options) {
			if (options.target) {
				insert_dev(options.target, this, options.anchor);
			}

			if (options.props) {
				this.$set(options.props);
				flush();
			}
		}
	}

	static get observedAttributes() {
		return ["focused"];
	}

	get focused() {
		return this.$$.ctx[9];
	}

	set focused(focused) {
		this.$$set({ focused });
		flush();
	}
}

customElements.define("login-component", Login_component);

export { Login_component as default };
