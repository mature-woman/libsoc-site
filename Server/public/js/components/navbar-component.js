
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteElement, i as init, a as attribute_to_object, b as insert_dev, s as safe_not_equal, d as dispatch_dev, c as validate_slots, o as onMount, e as element, f as space, n as noop, A as src_url_equal, j as attr_dev, g as add_location, k as append_dev, w as listen_dev, l as detach_dev, r as binding_callbacks } from './index-3e97afc8.js';

/* src\navbar\navbar-component.svelte generated by Svelte v3.52.0 */
const file = "src\\navbar\\navbar-component.svelte";

function create_fragment(ctx) {
	let header;
	let a0;
	let img;
	let img_src_value;
	let t0;
	let span0;
	let t2;
	let input;
	let t3;
	let label;
	let span1;
	let t4;
	let nav;
	let ul;
	let li0;
	let a1;
	let t6;
	let li1;
	let a2;
	let t8;
	let li2;
	let a3;
	let t10;
	let li3;
	let a4;
	let t12;
	let li4;
	let a5;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			header = element("header");
			a0 = element("a");
			img = element("img");
			t0 = space();
			span0 = element("span");
			span0.textContent = "Libertarian socialists";
			t2 = space();
			input = element("input");
			t3 = space();
			label = element("label");
			span1 = element("span");
			t4 = space();
			nav = element("nav");
			ul = element("ul");
			li0 = element("li");
			a1 = element("a");
			a1.textContent = "Manifesto";
			t6 = space();
			li1 = element("li");
			a2 = element("a");
			a2.textContent = "Join us";
			t8 = space();
			li2 = element("li");
			a3 = element("a");
			a3.textContent = "Groups";
			t10 = space();
			li3 = element("li");
			a4 = element("a");
			a4.textContent = "Communities";
			t12 = space();
			li4 = element("li");
			a5 = element("a");
			a5.textContent = "Cooperatives";
			this.c = noop;
			if (!src_url_equal(img.src, img_src_value = "img/common/flag.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "id", "navbar-logo");
			attr_dev(img, "alt", "logo");
			add_location(img, file, 37, 8, 812);
			attr_dev(span0, "id", "navbar-logo-text");
			add_location(span0, file, 38, 8, 881);
			attr_dev(a0, "id", "logo-container");
			attr_dev(a0, "href", "/");
			add_location(a0, file, 36, 4, 772);
			attr_dev(input, "type", "checkbox");
			attr_dev(input, "id", "side-menu");
			add_location(input, file, 41, 4, 983);
			attr_dev(span1, "id", "hamb-line");
			add_location(span1, file, 42, 37, 1106);
			attr_dev(label, "id", "hamb");
			attr_dev(label, "for", "side-menu");
			add_location(label, file, 42, 4, 1073);
			attr_dev(a1, "href", "/manifesto");
			add_location(a1, file, 46, 16, 1223);
			add_location(li0, file, 46, 12, 1219);
			attr_dev(a2, "href", "/join-us");
			add_location(a2, file, 47, 16, 1280);
			add_location(li1, file, 47, 12, 1276);
			attr_dev(a3, "href", "/groups");
			add_location(a3, file, 48, 16, 1333);
			add_location(li2, file, 48, 12, 1329);
			attr_dev(a4, "href", "/communities");
			add_location(a4, file, 49, 16, 1384);
			add_location(li3, file, 49, 12, 1380);
			attr_dev(a5, "href", "/cooperatives");
			add_location(a5, file, 50, 16, 1445);
			add_location(li4, file, 50, 12, 1441);
			attr_dev(ul, "id", "menu");
			add_location(ul, file, 45, 8, 1191);
			attr_dev(nav, "id", "nav");
			add_location(nav, file, 44, 4, 1167);
			attr_dev(header, "id", "navbar");
			add_location(header, file, 34, 0, 708);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, header, anchor);
			append_dev(header, a0);
			append_dev(a0, img);
			append_dev(a0, t0);
			append_dev(a0, span0);
			append_dev(header, t2);
			append_dev(header, input);
			/*input_binding*/ ctx[3](input);
			append_dev(header, t3);
			append_dev(header, label);
			append_dev(label, span1);
			append_dev(header, t4);
			append_dev(header, nav);
			append_dev(nav, ul);
			append_dev(ul, li0);
			append_dev(li0, a1);
			append_dev(ul, t6);
			append_dev(ul, li1);
			append_dev(li1, a2);
			append_dev(ul, t8);
			append_dev(ul, li2);
			append_dev(li2, a3);
			append_dev(ul, t10);
			append_dev(ul, li3);
			append_dev(li3, a4);
			append_dev(ul, t12);
			append_dev(ul, li4);
			append_dev(li4, a5);
			/*header_binding*/ ctx[4](header);

			if (!mounted) {
				dispose = listen_dev(input, "click", /*changeNavbar*/ ctx[2], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(header);
			/*input_binding*/ ctx[3](null);
			/*header_binding*/ ctx[4](null);
			mounted = false;
			dispose();
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
	validate_slots('navbar-component', slots, []);
	let hambInput;
	let navbar;

	function changeNavbar() {
		if (hambInput.checked) {
			$$invalidate(1, navbar.style.background = "white", navbar);
		} else {
			setTimeout(
				() => {
					$$invalidate(1, navbar.style.position = "relative", navbar);
					$$invalidate(1, navbar.style.background = "", navbar);
					$$invalidate(1, navbar.style.boxShadow = "", navbar);
				},
				510
			);
		}
	}

	onMount(() => {
		
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<navbar-component> was created with unknown prop '${key}'`);
	});

	function input_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			hambInput = $$value;
			$$invalidate(0, hambInput);
		});
	}

	function header_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			navbar = $$value;
			$$invalidate(1, navbar);
		});
	}

	$$self.$capture_state = () => ({ onMount, hambInput, navbar, changeNavbar });

	$$self.$inject_state = $$props => {
		if ('hambInput' in $$props) $$invalidate(0, hambInput = $$props.hambInput);
		if ('navbar' in $$props) $$invalidate(1, navbar = $$props.navbar);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [hambInput, navbar, changeNavbar, input_binding, header_binding];
}

class Navbar_component extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>@import '/css/common.css';@import '/css/navbar.css';</style>`;

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
			{},
			null
		);

		if (options) {
			if (options.target) {
				insert_dev(options.target, this, options.anchor);
			}
		}
	}
}

customElements.define("navbar-component", Navbar_component);

export { Navbar_component as default };
