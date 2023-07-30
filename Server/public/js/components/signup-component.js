
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteElement, i as init, a as attribute_to_object, b as insert_dev, t as flush, s as safe_not_equal, d as dispatch_dev, v as validate_slots, g as getContext, o as onMount, f as element, h as space, n as noop, k as attr_dev, j as add_location, u as src_url_equal, l as append_dev, m as listen_dev, p as detach_dev, r as run_all, q as binding_callbacks } from './index-998178c7.js';
import * as AuthTools from '../../../../../../../../../js/libraries/authTools.js';

/* src\auth\signup-component.svelte generated by Svelte v3.52.0 */
const file = "src\\auth\\signup-component.svelte";

function create_fragment(ctx) {
	let div3;
	let h20;
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
	let p0;
	let t13;
	let hr;
	let t14;
	let div2;
	let button2;
	let img;
	let img_src_value;
	let t15;
	let div6;
	let button3;
	let t16;
	let div5;
	let h21;
	let t18;
	let p1;
	let t20;
	let p2;
	let t22;
	let div4;
	let input3;
	let t23;
	let button4;
	let t25;
	let button5;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div3 = element("div");
			h20 = element("h2");
			h20.textContent = "SIGN UP";
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
			button1.textContent = "Sign up";
			t12 = space();
			p0 = element("p");
			t13 = space();
			hr = element("hr");
			t14 = space();
			div2 = element("div");
			button2 = element("button");
			img = element("img");
			t15 = space();
			div6 = element("div");
			button3 = element("button");
			t16 = space();
			div5 = element("div");
			h21 = element("h2");
			h21.textContent = "Registration is closed";
			t18 = space();
			p1 = element("p");
			p1.textContent = "We are still in the process of opening.";
			t20 = space();
			p2 = element("p");
			p2.textContent = "Sign up for updates to know when it becomes available:";
			t22 = space();
			div4 = element("div");
			input3 = element("input");
			t23 = space();
			button4 = element("button");
			button4.textContent = "sign up";
			t25 = space();
			button5 = element("button");
			button5.textContent = "No thanks";
			this.c = noop;
			attr_dev(h20, "class", "auth-title");
			add_location(h20, file, 98, 4, 2351);
			attr_dev(label0, "class", "auth-label");
			attr_dev(label0, "for", "emailInput");
			add_location(label0, file, 99, 4, 2392);
			attr_dev(span0, "id", "email-msg");
			add_location(span0, file, 99, 66, 2454);
			attr_dev(input0, "id", "emailInput");
			attr_dev(input0, "class", "authEmailInput");
			attr_dev(input0, "type", "email");
			add_location(input0, file, 100, 4, 2547);
			attr_dev(label1, "class", "auth-label");
			attr_dev(label1, "for", "emailInput");
			add_location(label1, file, 102, 8, 2673);
			attr_dev(span1, "id", "password-msg");
			add_location(span1, file, 102, 73, 2738);
			attr_dev(input1, "id", "passwordInput");
			attr_dev(input1, "class", "authPasswordInput");
			attr_dev(input1, "type", "password");
			add_location(input1, file, 103, 8, 2803);
			attr_dev(object, "type", "image/svg+xml");
			attr_dev(object, "data", "/img/auth/eye_icon.svg");
			attr_dev(object, "title", "eye-icon");
			add_location(object, file, 105, 12, 3104);
			attr_dev(button0, "class", "eye-icon");
			add_location(button0, file, 104, 8, 2948);
			attr_dev(div0, "class", "password-field");
			add_location(div0, file, 101, 4, 2635);
			attr_dev(input2, "type", "checkbox");
			attr_dev(input2, "id", "remember-me-checkbox");
			add_location(input2, file, 109, 8, 3258);
			attr_dev(label2, "id", "remember-me-label");
			attr_dev(label2, "for", "passwordInput");
			add_location(label2, file, 109, 80, 3330);
			attr_dev(div1, "id", "remember-me");
			add_location(div1, file, 108, 4, 3226);
			attr_dev(button1, "class", "auth-button");
			add_location(button1, file, 111, 4, 3417);
			attr_dev(p0, "id", "forgot-password");
			add_location(p0, file, 112, 4, 3558);
			attr_dev(hr, "class", "auth-line");
			add_location(hr, file, 113, 4, 3592);
			if (!src_url_equal(img.src, img_src_value = "/img/auth/google_icon.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "id", "navbar-logo");
			attr_dev(img, "alt", "google icon");
			add_location(img, file, 116, 12, 3708);
			add_location(button2, file, 115, 8, 3662);
			attr_dev(div2, "class", "auth-methods-group");
			add_location(div2, file, 114, 4, 3620);
			attr_dev(div3, "id", "signup-group");
			attr_dev(div3, "class", "pane auth-pane");
			add_location(div3, file, 97, 0, 2275);
			attr_dev(button3, "id", "shadow");
			add_location(button3, file, 128, 4, 4146);
			add_location(h21, file, 130, 8, 4238);
			add_location(p1, file, 131, 8, 4279);
			add_location(p2, file, 132, 8, 4335);
			attr_dev(input3, "id", "newsletterEmailInput");
			attr_dev(input3, "type", "text");
			add_location(input3, file, 134, 12, 4451);
			attr_dev(button4, "id", "newsletterEmailButton");
			add_location(button4, file, 135, 12, 4557);
			attr_dev(div4, "id", "newsletter-container");
			add_location(div4, file, 133, 8, 4406);
			attr_dev(button5, "id", "no-button");
			add_location(button5, file, 137, 8, 4674);
			attr_dev(div5, "id", "wrapper");
			attr_dev(div5, "class", "pane");
			add_location(div5, file, 129, 4, 4197);
			attr_dev(div6, "id", "dialog");
			add_location(div6, file, 127, 0, 4104);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, h20);
			append_dev(div3, t1);
			append_dev(div3, label0);
			append_dev(div3, span0);
			/*span0_binding*/ ctx[15](span0);
			append_dev(div3, t3);
			append_dev(div3, input0);
			/*input0_binding*/ ctx[17](input0);
			append_dev(div3, t4);
			append_dev(div3, div0);
			append_dev(div0, label1);
			append_dev(div0, span1);
			/*span1_binding*/ ctx[18](span1);
			append_dev(div0, t6);
			append_dev(div0, input1);
			/*input1_binding*/ ctx[19](input1);
			append_dev(div0, t7);
			append_dev(div0, button0);
			append_dev(button0, object);
			/*button0_binding*/ ctx[21](button0);
			append_dev(div3, t8);
			append_dev(div3, div1);
			append_dev(div1, input2);
			/*input2_binding*/ ctx[23](input2);
			append_dev(div1, label2);
			append_dev(div3, t10);
			append_dev(div3, button1);
			append_dev(div3, t12);
			append_dev(div3, p0);
			append_dev(div3, t13);
			append_dev(div3, hr);
			append_dev(div3, t14);
			append_dev(div3, div2);
			append_dev(div2, button2);
			append_dev(button2, img);
			/*div3_binding*/ ctx[24](div3);
			insert_dev(target, t15, anchor);
			insert_dev(target, div6, anchor);
			append_dev(div6, button3);
			append_dev(div6, t16);
			append_dev(div6, div5);
			append_dev(div5, h21);
			append_dev(div5, t18);
			append_dev(div5, p1);
			append_dev(div5, t20);
			append_dev(div5, p2);
			append_dev(div5, t22);
			append_dev(div5, div4);
			append_dev(div4, input3);
			/*input3_binding*/ ctx[25](input3);
			append_dev(div4, t23);
			append_dev(div4, button4);
			/*button4_binding*/ ctx[26](button4);
			append_dev(div5, t25);
			append_dev(div5, button5);
			/*div6_binding*/ ctx[27](div6);

			if (!mounted) {
				dispose = [
					listen_dev(span0, "change", /*change_handler*/ ctx[16], false, false, false),
					listen_dev(input1, "change", /*change_handler_1*/ ctx[20], false, false, false),
					listen_dev(button0, "click", /*click_handler*/ ctx[22], false, false, false),
					listen_dev(button1, "click", /*showDialog*/ ctx[10], false, false, false),
					listen_dev(button2, "click", /*showDialog*/ ctx[10], false, false, false),
					listen_dev(button3, "click", /*hide*/ ctx[11], false, false, false),
					listen_dev(input3, "click", /*clearField*/ ctx[13], false, false, false),
					listen_dev(button4, "click", /*sendEmail*/ ctx[12], false, false, false),
					listen_dev(button5, "click", /*hide*/ ctx[11], false, false, false)
				];

				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			/*span0_binding*/ ctx[15](null);
			/*input0_binding*/ ctx[17](null);
			/*span1_binding*/ ctx[18](null);
			/*input1_binding*/ ctx[19](null);
			/*button0_binding*/ ctx[21](null);
			/*input2_binding*/ ctx[23](null);
			/*div3_binding*/ ctx[24](null);
			if (detaching) detach_dev(t15);
			if (detaching) detach_dev(div6);
			/*input3_binding*/ ctx[25](null);
			/*button4_binding*/ ctx[26](null);
			/*div6_binding*/ ctx[27](null);
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

function removeMsg(msg) {
	if (msg.innerHTML != "") {
		msg.innerHTML = "";
	}
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('signup-component', slots, []);
	let { focused = false } = $$props;

	// Main code
	let signupGroup;

	let emailInput;
	let passwordInput;
	let passwordVisibilityButton;
	let inputs;
	let googleButton;
	let emailMsg;
	let passwordMsg;
	let msgs;
	let rememberMe;
	let dialog;
	let signUp;
	let signUpField;
	let parentProps = getContext("auth");

	function showDialog() {
		$$invalidate(7, dialog.style.display = "block", dialog);
	}

	function hide() {
		if (dialog != null) {
			$$invalidate(7, dialog.style.display = "none", dialog);
		}
	}

	function sendEmail() {
		let email = signUpField.value;

		if (email.includes("@")) {
			sendText("/get-email", email);
			$$invalidate(9, signUpField.value = "", signUpField);
			$$invalidate(9, signUpField.placeholder = "Subscribed!", signUpField);
			signUpField.style.setProperty("--c", "hsl(147, 33%, 60%)");
		} else {
			$$invalidate(9, signUpField.value = "", signUpField);
			$$invalidate(9, signUpField.placeholder = "must contain '@'", signUpField);
			signUpField.style.setProperty("--c", "hsl(0, 100%, 60%)");
		}
	}

	function clearField() {
		$$invalidate(9, signUpField.placeholder = "", signUpField);
	}

	function renderGoogle() {
		if (parentProps.googleInit) {
			google.accounts.id.renderButton(googleButton, { theme: 'outline', size: 'large' });
		} else {
			setTimeout(renderGoogle, 100);
		}
	}

	onMount(() => {
		$$invalidate(6, rememberMe.checked = true, rememberMe);

		inputs = {
			email: emailInput,
			password: passwordInput
		};

		msgs = { email: emailMsg, password: passwordMsg };

		document.addEventListener("keypress", function (event) {
			if (event.code == "Enter") {
				if (focused) {
					AuthTools.signup(msgs, inputs, toLandingPage);
				}
			}
		});
	}); //renderGoogle()

	const writable_props = ['focused'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<signup-component> was created with unknown prop '${key}'`);
	});

	function span0_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			emailMsg = $$value;
			$$invalidate(4, emailMsg);
		});
	}

	const change_handler = () => removeMsg(emailMsg);

	function input0_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			emailInput = $$value;
			$$invalidate(1, emailInput);
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
			$$invalidate(2, passwordInput);
		});
	}

	const change_handler_1 = () => removeMsg(passwordMsg);

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
			$$invalidate(6, rememberMe);
		});
	}

	function div3_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			signupGroup = $$value;
			$$invalidate(0, signupGroup);
		});
	}

	function input3_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			signUpField = $$value;
			$$invalidate(9, signUpField);
		});
	}

	function button4_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			signUp = $$value;
			$$invalidate(8, signUp);
		});
	}

	function div6_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			dialog = $$value;
			$$invalidate(7, dialog);
		});
	}

	$$self.$$set = $$props => {
		if ('focused' in $$props) $$invalidate(14, focused = $$props.focused);
	};

	$$self.$capture_state = () => ({
		onMount,
		getContext,
		AuthTools,
		focused,
		signupGroup,
		emailInput,
		passwordInput,
		passwordVisibilityButton,
		inputs,
		googleButton,
		emailMsg,
		passwordMsg,
		msgs,
		rememberMe,
		dialog,
		signUp,
		signUpField,
		parentProps,
		removeMsg,
		showDialog,
		hide,
		sendEmail,
		clearField,
		renderGoogle
	});

	$$self.$inject_state = $$props => {
		if ('focused' in $$props) $$invalidate(14, focused = $$props.focused);
		if ('signupGroup' in $$props) $$invalidate(0, signupGroup = $$props.signupGroup);
		if ('emailInput' in $$props) $$invalidate(1, emailInput = $$props.emailInput);
		if ('passwordInput' in $$props) $$invalidate(2, passwordInput = $$props.passwordInput);
		if ('passwordVisibilityButton' in $$props) $$invalidate(3, passwordVisibilityButton = $$props.passwordVisibilityButton);
		if ('inputs' in $$props) inputs = $$props.inputs;
		if ('googleButton' in $$props) googleButton = $$props.googleButton;
		if ('emailMsg' in $$props) $$invalidate(4, emailMsg = $$props.emailMsg);
		if ('passwordMsg' in $$props) $$invalidate(5, passwordMsg = $$props.passwordMsg);
		if ('msgs' in $$props) msgs = $$props.msgs;
		if ('rememberMe' in $$props) $$invalidate(6, rememberMe = $$props.rememberMe);
		if ('dialog' in $$props) $$invalidate(7, dialog = $$props.dialog);
		if ('signUp' in $$props) $$invalidate(8, signUp = $$props.signUp);
		if ('signUpField' in $$props) $$invalidate(9, signUpField = $$props.signUpField);
		if ('parentProps' in $$props) parentProps = $$props.parentProps;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		signupGroup,
		emailInput,
		passwordInput,
		passwordVisibilityButton,
		emailMsg,
		passwordMsg,
		rememberMe,
		dialog,
		signUp,
		signUpField,
		showDialog,
		hide,
		sendEmail,
		clearField,
		focused,
		span0_binding,
		change_handler,
		input0_binding,
		span1_binding,
		input1_binding,
		change_handler_1,
		button0_binding,
		click_handler,
		input2_binding,
		div3_binding,
		input3_binding,
		button4_binding,
		div6_binding
	];
}

class Signup_component extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>@import '/css/common.css';@import '/css/auth.css';#dialog{display:none}#wrapper p{text-align:justify}#wrapper h2{text-align:center;margin-bottom:1rem}#shadow{position:fixed;cursor:default;top:50%;right:50%;transform:translate(50%,-50%);width:100vw;height:100vh;background:rgb(0, 0, 0, 0.2);z-index:999999}#newsletter-container{position:relative;height:3rem;width:100%;margin-top:1rem;display:flex;flex-direction:row}#newsletterEmailInput{height:2.5rem;border-radius:0.2rem 0 0 0.2rem;filter:drop-shadow( 0.07rem 0.14rem 0.07rem rgb(0 0 0 / 0.4));flex-grow:1}#newsletterEmailInput::placeholder{color:var(--c,gray);opacity:1}#newsletterEmailButton{width:6.8rem;height:2.5rem;background:var(--pink);color:#ffffff;font-family:var(--sans-serif,sans-serif);font-size:1.4rem;border-radius:0 0.2rem 0.2rem 0;filter:drop-shadow( 0.07rem 0.14rem 0.07rem rgb(0 0 0 / 0.4))}#newsletterEmailButton:active{background:var(--darker-pink)}#wrapper{top:50%;right:50%;transform:translate(50%,-50%);position:fixed;max-width:36rem;width:90vw;padding:2rem 4rem;z-index:1999999}#wrapper *{font-family:var(--sans-serif)}#no-button{position:relative;left:50%;transform:translateX(-50%);width:13rem;height:3rem;margin-top:2rem;margin-bottom:0.5rem;background:#ffffff;border:0.2rem solid var(--pink);font-family:var(--sans-serif,sans-serif);font-size:1.4rem;border-radius:0.5rem;filter:drop-shadow( 0.07rem 0.14rem 0.07rem rgb(0 0 0 / 0.4))}#no-button:active{background:hsl(343, 23%, 82%)}</style>`;

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
			{ focused: 14 },
			null,
			[-1, -1]
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
		return this.$$.ctx[14];
	}

	set focused(focused) {
		this.$$set({ focused });
		flush();
	}
}

customElements.define("signup-component", Signup_component);

export { Signup_component as default };
