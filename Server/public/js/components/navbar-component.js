
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteElement, i as init, a as attribute_to_object, b as insert_dev, s as safe_not_equal, d as dispatch_dev, v as validate_slots, c as validate_store, e as component_subscribe, o as onMount, E as getContext, g as globals, f as validate_each_argument, h as empty, n as noop, j as detach_dev, C as binding_callbacks, k as element, l as space, t as text, p as attr_dev, m as add_location, q as src_url_equal, u as append_dev, y as listen_dev, w as set_data_dev, x as destroy_each, z as run_all } from './index-42a25c61.js';
import { w as writable } from './index-a1c185ea.js';
import { loadLocaleContent, locales } from '../../../../../../../../../js/libraries/serverTools.js';

/* src\navbar\navbar-component.svelte generated by Svelte v3.52.0 */

const { Object: Object_1 } = globals;
const file = "src\\navbar\\navbar-component.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[14] = list[i][0];
	child_ctx[15] = list[i][1];
	return child_ctx;
}

// (61:4) {#if Object.keys($content).length!=0}
function create_if_block(ctx) {
	let header;
	let input;
	let t0;
	let label;
	let span0;
	let t1;
	let a0;
	let img0;
	let img0_src_value;
	let t2;
	let span1;
	let t3_value = /*$content*/ ctx[3].orgName + "";
	let t3;
	let t4;
	let nav;
	let ul;
	let li0;
	let a1;
	let t5_value = /*$content*/ ctx[3].manifesto + "";
	let t5;
	let t6;
	let li1;
	let a2;
	let t7_value = /*$content*/ ctx[3].joinUs + "";
	let t7;
	let t8;
	let li2;
	let a3;
	let t9_value = /*$content*/ ctx[3].groups + "";
	let t9;
	let t10;
	let li3;
	let a4;
	let t11_value = /*$content*/ ctx[3].communities + "";
	let t11;
	let t12;
	let li4;
	let a5;
	let t13_value = /*$content*/ ctx[3].cooperatives + "";
	let t13;
	let t14;
	let li5;
	let a6;
	let t15_value = /*$content*/ ctx[3].partners + "";
	let t15;
	let t16;
	let li6;
	let button;
	let picture;
	let source0;
	let t17;
	let source1;
	let t18;
	let img1;
	let t19;
	let div;
	let mounted;
	let dispose;
	let each_value = Object.entries(locales);
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			header = element("header");
			input = element("input");
			t0 = space();
			label = element("label");
			span0 = element("span");
			t1 = space();
			a0 = element("a");
			img0 = element("img");
			t2 = space();
			span1 = element("span");
			t3 = text(t3_value);
			t4 = space();
			nav = element("nav");
			ul = element("ul");
			li0 = element("li");
			a1 = element("a");
			t5 = text(t5_value);
			t6 = space();
			li1 = element("li");
			a2 = element("a");
			t7 = text(t7_value);
			t8 = space();
			li2 = element("li");
			a3 = element("a");
			t9 = text(t9_value);
			t10 = space();
			li3 = element("li");
			a4 = element("a");
			t11 = text(t11_value);
			t12 = space();
			li4 = element("li");
			a5 = element("a");
			t13 = text(t13_value);
			t14 = space();
			li5 = element("li");
			a6 = element("a");
			t15 = text(t15_value);
			t16 = space();
			li6 = element("li");
			button = element("button");
			picture = element("picture");
			source0 = element("source");
			t17 = space();
			source1 = element("source");
			t18 = space();
			img1 = element("img");
			t19 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr_dev(input, "type", "checkbox");
			attr_dev(input, "id", "side-menu");
			add_location(input, file, 63, 12, 1785);
			attr_dev(span0, "id", "hamb-line");
			add_location(span0, file, 64, 45, 1916);
			attr_dev(label, "id", "hamb");
			attr_dev(label, "for", "side-menu");
			add_location(label, file, 64, 12, 1883);
			if (!src_url_equal(img0.src, img0_src_value = "/img/common/flag.png")) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "id", "navbar-logo");
			attr_dev(img0, "alt", "logo");
			add_location(img0, file, 67, 16, 2058);
			attr_dev(span1, "id", "navbar-logo-text");
			add_location(span1, file, 68, 16, 2136);
			attr_dev(a0, "id", "logo-container");
			attr_dev(a0, "href", "/" + /*locale*/ ctx[6] + "/");
			add_location(a0, file, 66, 12, 1993);
			attr_dev(a1, "href", "/" + /*locale*/ ctx[6] + "/manifesto");
			add_location(a1, file, 73, 24, 2320);
			add_location(li0, file, 73, 20, 2316);
			attr_dev(a2, "href", "/" + /*locale*/ ctx[6] + "/join-us");
			add_location(a2, file, 74, 24, 2409);
			add_location(li1, file, 74, 20, 2405);
			attr_dev(a3, "href", "/" + /*locale*/ ctx[6] + "/groups");
			add_location(a3, file, 75, 24, 2493);
			add_location(li2, file, 75, 20, 2489);
			attr_dev(a4, "href", "/" + /*locale*/ ctx[6] + "/communities");
			add_location(a4, file, 76, 24, 2576);
			add_location(li3, file, 76, 20, 2572);
			attr_dev(a5, "href", "/" + /*locale*/ ctx[6] + "/cooperatives");
			add_location(a5, file, 77, 24, 2669);
			add_location(li4, file, 77, 20, 2665);
			attr_dev(a6, "href", "/" + /*locale*/ ctx[6] + "/partners");
			add_location(a6, file, 78, 24, 2764);
			add_location(li5, file, 78, 20, 2760);
			attr_dev(source0, "srcset", "/img/common/globe.webp");
			add_location(source0, file, 82, 32, 2994);
			attr_dev(source1, "srcset", "/img/common/globe.png");
			add_location(source1, file, 83, 32, 3068);
			attr_dev(img1, "id", "locales-img");
			attr_dev(img1, "alt", "globe");
			add_location(img1, file, 84, 32, 3141);
			add_location(picture, file, 81, 28, 2951);
			add_location(button, file, 80, 24, 2890);
			attr_dev(li6, "id", "locales");
			add_location(li6, file, 79, 20, 2847);
			attr_dev(div, "id", "locales-dropdown");
			add_location(div, file, 88, 20, 3299);
			attr_dev(ul, "id", "menu");
			add_location(ul, file, 72, 16, 2280);
			attr_dev(nav, "id", "nav");
			add_location(nav, file, 71, 12, 2248);
			attr_dev(header, "id", "navbar");
			add_location(header, file, 61, 8, 1695);
		},
		m: function mount(target, anchor) {
			insert_dev(target, header, anchor);
			append_dev(header, input);
			/*input_binding*/ ctx[10](input);
			append_dev(header, t0);
			append_dev(header, label);
			append_dev(label, span0);
			append_dev(header, t1);
			append_dev(header, a0);
			append_dev(a0, img0);
			append_dev(a0, t2);
			append_dev(a0, span1);
			append_dev(span1, t3);
			append_dev(header, t4);
			append_dev(header, nav);
			append_dev(nav, ul);
			append_dev(ul, li0);
			append_dev(li0, a1);
			append_dev(a1, t5);
			append_dev(ul, t6);
			append_dev(ul, li1);
			append_dev(li1, a2);
			append_dev(a2, t7);
			append_dev(ul, t8);
			append_dev(ul, li2);
			append_dev(li2, a3);
			append_dev(a3, t9);
			append_dev(ul, t10);
			append_dev(ul, li3);
			append_dev(li3, a4);
			append_dev(a4, t11);
			append_dev(ul, t12);
			append_dev(ul, li4);
			append_dev(li4, a5);
			append_dev(a5, t13);
			append_dev(ul, t14);
			append_dev(ul, li5);
			append_dev(li5, a6);
			append_dev(a6, t15);
			append_dev(ul, t16);
			append_dev(ul, li6);
			append_dev(li6, button);
			append_dev(button, picture);
			append_dev(picture, source0);
			append_dev(picture, t17);
			append_dev(picture, source1);
			append_dev(picture, t18);
			append_dev(picture, img1);
			append_dev(ul, t19);
			append_dev(ul, div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			/*div_binding*/ ctx[12](div);
			/*header_binding*/ ctx[13](header);

			if (!mounted) {
				dispose = [
					listen_dev(input, "click", /*changeNavbar*/ ctx[7], false, false, false),
					listen_dev(button, "click", /*showLocales*/ ctx[8], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$content*/ 8 && t3_value !== (t3_value = /*$content*/ ctx[3].orgName + "")) set_data_dev(t3, t3_value);
			if (dirty & /*$content*/ 8 && t5_value !== (t5_value = /*$content*/ ctx[3].manifesto + "")) set_data_dev(t5, t5_value);
			if (dirty & /*$content*/ 8 && t7_value !== (t7_value = /*$content*/ ctx[3].joinUs + "")) set_data_dev(t7, t7_value);
			if (dirty & /*$content*/ 8 && t9_value !== (t9_value = /*$content*/ ctx[3].groups + "")) set_data_dev(t9, t9_value);
			if (dirty & /*$content*/ 8 && t11_value !== (t11_value = /*$content*/ ctx[3].communities + "")) set_data_dev(t11, t11_value);
			if (dirty & /*$content*/ 8 && t13_value !== (t13_value = /*$content*/ ctx[3].cooperatives + "")) set_data_dev(t13, t13_value);
			if (dirty & /*$content*/ 8 && t15_value !== (t15_value = /*$content*/ ctx[3].partners + "")) set_data_dev(t15, t15_value);

			if (dirty & /*changeLocale, Object, locales*/ 512) {
				each_value = Object.entries(locales);
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(header);
			/*input_binding*/ ctx[10](null);
			destroy_each(each_blocks, detaching);
			/*div_binding*/ ctx[12](null);
			/*header_binding*/ ctx[13](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(61:4) {#if Object.keys($content).length!=0}",
		ctx
	});

	return block;
}

// (90:24) {#each Object.entries(locales) as [loc,name]}
function create_each_block(ctx) {
	let button;
	let t_value = /*name*/ ctx[15] + "";
	let t;
	let mounted;
	let dispose;

	function click_handler() {
		return /*click_handler*/ ctx[11](/*loc*/ ctx[14]);
	}

	const block = {
		c: function create() {
			button = element("button");
			t = text(t_value);
			add_location(button, file, 90, 28, 3455);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, t);

			if (!mounted) {
				dispose = listen_dev(button, "click", click_handler, false, false, false);
				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(90:24) {#each Object.entries(locales) as [loc,name]}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let show_if = Object.keys(/*$content*/ ctx[3]).length != 0;
	let if_block_anchor;
	let if_block = show_if && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.c = noop;
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$content*/ 8) show_if = Object.keys(/*$content*/ ctx[3]).length != 0;

			if (show_if) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
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
	let $content;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('navbar-component', slots, []);
	let hambInput;
	let navbar;
	let localesDropdown;
	let loaded;
	let content = writable({});
	validate_store(content, 'content');
	component_subscribe($$self, content, value => $$invalidate(3, $content = value));
	let locale = loadLocaleContent(content, "navbar-component", loaded);

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

	function showLocales() {
		if (localesDropdown.style.display == "block") {
			$$invalidate(2, localesDropdown.style.display = "none", localesDropdown);
		} else {
			$$invalidate(2, localesDropdown.style.display = "block", localesDropdown);
		}
	}

	function changeLocale(lang) {
		localStorage.setItem("locale", lang);
		let locSplit = location.href.split("/");
		let localesSymbols = Object.keys(locales);
		locSplit = locSplit.filter(x => !localesSymbols.includes(x));
		let loc = locSplit.slice(0, locSplit.length - 1).join("/") + "/" + lang + "/" + locSplit[locSplit.length - 1];
		location.href = loc;
	}

	onMount(() => {
		
	});

	const writable_props = [];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<navbar-component> was created with unknown prop '${key}'`);
	});

	function input_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			hambInput = $$value;
			$$invalidate(0, hambInput);
		});
	}

	const click_handler = loc => changeLocale(loc);

	function div_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			localesDropdown = $$value;
			$$invalidate(2, localesDropdown);
		});
	}

	function header_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			navbar = $$value;
			$$invalidate(1, navbar);
		});
	}

	$$self.$capture_state = () => ({
		onMount,
		getContext,
		writable,
		loadLocaleContent,
		locales,
		hambInput,
		navbar,
		localesDropdown,
		loaded,
		content,
		locale,
		changeNavbar,
		showLocales,
		changeLocale,
		$content
	});

	$$self.$inject_state = $$props => {
		if ('hambInput' in $$props) $$invalidate(0, hambInput = $$props.hambInput);
		if ('navbar' in $$props) $$invalidate(1, navbar = $$props.navbar);
		if ('localesDropdown' in $$props) $$invalidate(2, localesDropdown = $$props.localesDropdown);
		if ('loaded' in $$props) $$invalidate(4, loaded = $$props.loaded);
		if ('content' in $$props) $$invalidate(5, content = $$props.content);
		if ('locale' in $$props) $$invalidate(6, locale = $$props.locale);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		hambInput,
		navbar,
		localesDropdown,
		$content,
		loaded,
		content,
		locale,
		changeNavbar,
		showLocales,
		changeLocale,
		input_binding,
		click_handler,
		div_binding,
		header_binding
	];
}

class Navbar_component extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>@import '/css/common.css';#navbar{position:relative;top:0;width:min(100%,116rem);z-index:1000000000;height:5.26rem}#navbar *{font-family:var(--sans-serif, sans-serif)}#logo-container{display:flex;position:absolute;margin-left:1rem;height:100%;max-height:5.26rem;color:black;z-index:1;flex-direction:row;flex-wrap:nowrap;align-items:center}#navbar-logo{height:3.5rem;width:3.5rem;object-fit:contain;border-radius:10rem}#navbar-logo-text{position:relative;width:auto;height:100%;line-height:400%;white-space:nowrap;text-align:center;font-size:1.4rem;color:#292222;font-family:var(--sans-serif, sans-serif);font-weight:400;padding-left:1.2rem}#nav{position:fixed;width:100%;height:100%;background-color:white;overflow:hidden;z-index:0}#menu a{display:block;padding:1.2rem;padding-top:1rem;padding-bottom:1rem;color:black;font-size:1.4rem}#menu a:hover{background-color:rgb(220, 220, 220)}#menu a:active{background-color:#f7aec0}#menu li{list-style-type:none}#nav{max-height:0}#hamb{position:absolute;cursor:pointer;right:0rem;padding:2.8rem 2rem;z-index:9999}#hamb-line{background:black;display:block;height:2px;position:relative;width:24px}#hamb-line::before,#hamb-line::after{background:black;content:'';display:block;height:100%;position:absolute;transition:all .2s ease-out;width:100%}#hamb-line::before{top:5px}#hamb-line::after{top:-5px}#side-menu{display:none}#side-menu:checked~nav{display:block;max-height:100%;padding-top:5.625rem}#side-menu:checked~#logo-container{position:fixed}#side-menu:checked~#hamb{position:fixed}#side-menu:checked~#logo-container{position:fixed}#side-menu:checked~#hamb #hamb-line{background:transparent}#side-menu:checked~#hamb #hamb-line::before{transform:rotate(-45deg);top:0}#side-menu:checked~#hamb #hamb-line::after{transform:rotate(45deg);top:0}#locales{position:relative}#locales button{width:100%;text-align:left;height:4rem}#locales button:hover{opacity:0.5}#locales-img{position:relative;top:0rem;height:2rem;margin-left:1.2rem}#locales-dropdown{position:absolute;display:none;top:5.6rem;right:1.8rem;border:#404040 solid 0.1rem;padding:1.4rem;background-color:white}#locales-dropdown button{display:block;font-family:var(--sans-serif,sans-serif);font-size:1.3rem;width:100%}#locales-dropdown button:hover{color:rgb(127, 127, 127)}#locales-dropdown>:first-child{padding-bottom:0.5rem}#locales-dropdown>:nth-child(2){padding-top:0.5rem}@media only screen and (min-width: 1500px){#navbar{position:relative;width:min(95%,116rem);left:50%;transform:translateX(-50%)}#nav{max-height:none;top:0;position:relative;float:right;width:fit-content;background-color:transparent;overflow:visible}#side-menu:checked~nav{padding-top:0}#menu li{float:left}#menu a:hover{background-color:transparent;color:rgb(127, 127, 127)}#menu a{padding:1.2rem;padding-top:1.9rem;padding-bottom:1.9rem}#hamb{display:none}#locales{position:relative;margin-right:1.8rem}#locales-img{top:0.9rem}#locales-dropdown{top:5,7rem}}</style>`;

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
