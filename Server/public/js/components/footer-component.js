
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteElement, i as init, a as attribute_to_object, b as insert_dev, s as safe_not_equal, d as dispatch_dev, v as validate_slots, c as validate_store, e as component_subscribe, f as empty, n as noop, h as detach_dev, k as element, t as text, l as space, G as svg_element, m as add_location, p as attr_dev, D as set_style, u as append_dev, y as listen_dev, w as set_data_dev } from './index-d19aafba.js';
import { w as writable } from './index-4664ced0.js';
import { loadLocaleContent } from '../../../../../../../../../js/libraries/serverTools.js';

/* src\footer\footer-component.svelte generated by Svelte v3.52.0 */
const file = "src\\footer\\footer-component.svelte";

// (21:4) {#if $loaded==2}
function create_if_block(ctx) {
	let footer;
	let div2;
	let div1;
	let div0;
	let h2;
	let t0_value = /*$content*/ ctx[1].contactUs + "";
	let t0;
	let t1;
	let p0;
	let t2;
	let a0;
	let t3_value = /*$content*/ ctx[1].inviteLink + "";
	let t3;
	let t4;
	let p1;
	let t5;
	let a1;
	let t6_value = /*$content*/ ctx[1].inviteLink + "";
	let t6;
	let t7;
	let button;
	let svg;
	let g;
	let rect;
	let path;
	let t8;
	let p2;
	let t9;
	let a2;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			footer = element("footer");
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			h2 = element("h2");
			t0 = text(t0_value);
			t1 = space();
			p0 = element("p");
			t2 = text("Discord: ");
			a0 = element("a");
			t3 = text(t3_value);
			t4 = space();
			p1 = element("p");
			t5 = text("WhatsApp: ");
			a1 = element("a");
			t6 = text(t6_value);
			t7 = space();
			button = element("button");
			svg = svg_element("svg");
			g = svg_element("g");
			rect = svg_element("rect");
			path = svg_element("path");
			t8 = space();
			p2 = element("p");
			t9 = text("Licensed under a Creative Commons ");
			a2 = element("a");
			a2.textContent = "CC BY 4.0 license";
			add_location(h2, file, 25, 24, 692);
			attr_dev(a0, "href", "https://discord.gg/Qk8KUk787z");
			attr_dev(a0, "target", "_blank");
			attr_dev(a0, "rel", "noreferrer");
			set_style(a0, "margin-left", "1.8rem");
			add_location(a0, file, 27, 36, 858);
			add_location(p0, file, 27, 24, 846);
			attr_dev(a1, "href", "https://chat.whatsapp.com/BhnmUNljUxJ2AjeHUwyTKh");
			attr_dev(a1, "target", "_blank");
			attr_dev(a1, "rel", "noreferrer");
			set_style(a1, "margin-left", "0.5rem");
			add_location(a1, file, 28, 37, 1026);
			add_location(p1, file, 28, 24, 1013);
			attr_dev(div0, "id", "contact-us-container");
			add_location(div0, file, 24, 20, 635);
			attr_dev(div1, "id", "footer-grid-content-container");
			attr_dev(div1, "class", "logged");
			add_location(div1, file, 23, 16, 558);
			attr_dev(rect, "id", "Rectangle_146");
			attr_dev(rect, "data-name", "Rectangle 146");
			attr_dev(rect, "width", "11");
			attr_dev(rect, "height", "51");
			attr_dev(rect, "rx", "5.5");
			attr_dev(rect, "transform", "translate(22 24)");
			attr_dev(rect, "fill", "#cb1816");
			add_location(rect, file, 34, 24, 1573);
			attr_dev(path, "id", "Path_1145");
			attr_dev(path, "data-name", "Path 1145");
			attr_dev(path, "d", "M23.814,4.021a5,5,0,0,1,7.372,0l16.134,17.6c2.94,3.207,1.046,10.4-3.686,8.379S28.02,14.081,28.391,13.524,16.544,27.976,11.366,30,4.741,24.828,7.68,21.621Z");
			attr_dev(path, "fill", "#DD1C1A");
			add_location(path, file, 35, 24, 1727);
			attr_dev(g, "id", "Group_268");
			attr_dev(g, "data-name", "Group 268");
			attr_dev(g, "transform", "translate(-6.177 -2.399)");
			add_location(g, file, 33, 24, 1470);
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr_dev(svg, "width", "42.545");
			attr_dev(svg, "height", "72.601");
			attr_dev(svg, "viewBox", "0 0 42.545 72.601");
			add_location(svg, file, 32, 20, 1345);
			attr_dev(button, "id", "footer-up");
			attr_dev(button, "aria-label", "go up");
			add_location(button, file, 31, 16, 1244);
			attr_dev(a2, "href", "https://creativecommons.org/licenses/by/4.0/legalcode ");
			attr_dev(a2, "target", "_blank");
			attr_dev(a2, "rel", "noreferrer");
			add_location(a2, file, 39, 75, 2137);
			attr_dev(p2, "id", "footer-copyright");
			add_location(p2, file, 39, 16, 2078);
			attr_dev(div2, "id", "footer-content-container");
			add_location(div2, file, 22, 12, 505);
			add_location(footer, file, 21, 8, 483);
		},
		m: function mount(target, anchor) {
			insert_dev(target, footer, anchor);
			append_dev(footer, div2);
			append_dev(div2, div1);
			append_dev(div1, div0);
			append_dev(div0, h2);
			append_dev(h2, t0);
			append_dev(div0, t1);
			append_dev(div0, p0);
			append_dev(p0, t2);
			append_dev(p0, a0);
			append_dev(a0, t3);
			append_dev(div0, t4);
			append_dev(div0, p1);
			append_dev(p1, t5);
			append_dev(p1, a1);
			append_dev(a1, t6);
			append_dev(div2, t7);
			append_dev(div2, button);
			append_dev(button, svg);
			append_dev(svg, g);
			append_dev(g, rect);
			append_dev(g, path);
			append_dev(div2, t8);
			append_dev(div2, p2);
			append_dev(p2, t9);
			append_dev(p2, a2);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler*/ ctx[4], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$content*/ 2 && t0_value !== (t0_value = /*$content*/ ctx[1].contactUs + "")) set_data_dev(t0, t0_value);
			if (dirty & /*$content*/ 2 && t3_value !== (t3_value = /*$content*/ ctx[1].inviteLink + "")) set_data_dev(t3, t3_value);
			if (dirty & /*$content*/ 2 && t6_value !== (t6_value = /*$content*/ ctx[1].inviteLink + "")) set_data_dev(t6, t6_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(footer);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(21:4) {#if $loaded==2}",
		ctx
	});

	return block;
}

// (20:0) {#key $loaded}
function create_key_block(ctx) {
	let if_block_anchor;
	let if_block = /*$loaded*/ ctx[0] == 2 && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (/*$loaded*/ ctx[0] == 2) {
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
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_key_block.name,
		type: "key",
		source: "(20:0) {#key $loaded}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let previous_key = /*$loaded*/ ctx[0];
	let key_block_anchor;
	let key_block = create_key_block(ctx);

	const block = {
		c: function create() {
			key_block.c();
			key_block_anchor = empty();
			this.c = noop;
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			key_block.m(target, anchor);
			insert_dev(target, key_block_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$loaded*/ 1 && safe_not_equal(previous_key, previous_key = /*$loaded*/ ctx[0])) {
				key_block.d(1);
				key_block = create_key_block(ctx);
				key_block.c();
				key_block.m(key_block_anchor.parentNode, key_block_anchor);
			} else {
				key_block.p(ctx, dirty);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(key_block_anchor);
			key_block.d(detaching);
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
	let $loaded;
	let $content;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('footer-component', slots, []);
	let loaded = writable(0);
	validate_store(loaded, 'loaded');
	component_subscribe($$self, loaded, value => $$invalidate(0, $loaded = value));
	let content = writable({});
	validate_store(content, 'content');
	component_subscribe($$self, content, value => $$invalidate(1, $content = value));
	loadLocaleContent(content, "countries", loaded);
	loadLocaleContent(content, "footer-component", loaded);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<footer-component> was created with unknown prop '${key}'`);
	});

	const click_handler = () => {
		location.href = '#';
	};

	$$self.$capture_state = () => ({
		writable,
		loadLocaleContent,
		loaded,
		content,
		$loaded,
		$content
	});

	$$self.$inject_state = $$props => {
		if ('loaded' in $$props) $$invalidate(2, loaded = $$props.loaded);
		if ('content' in $$props) $$invalidate(3, content = $$props.content);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [$loaded, $content, loaded, content, click_handler];
}

class Footer_component extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>@import '/css/common.css';footer{position:relative;bottom:0;width:100%;height:auto;background:#5B6970;border-top:#cb1816 solid 0.5rem}footer p,footer a{font-family:var(--sans-serif)}#footer-content-container{position:relative;margin:auto;padding-top:2rem;max-width:116rem;width:97vw}#footer-grid-content-container{display:grid;margin-left:2rem;margin-right:2rem;margin-bottom:1rem}.logged{grid-template-columns:auto auto 2rem}footer h2{color:#ffffff;font-size:1.3rem;margin-bottom:0.5rem}#footer-copyright{position:relative;margin:auto;width:100%;bottom:0rem;height:3rem;top:0rem;margin-bottom:0;font-size:1rem;text-align:center}#footer-copyright *{font-size:1rem}footer a{font-size:1.1rem;color:#ffffff}footer p{display:block;font-size:1.1rem;color:#d8d8d8;font-family:var(--sans-serif,sans-serif);margin-bottom:0.5rem}#contact-us-container{width:16rem}#footer-up{position:absolute;width:4.8rem;height:4.8rem;border-radius:3.4rem;top:4rem;right:2rem;background:#ffffff}#footer-up svg{width:40%;height:auto}@media only screen and (max-width: 1170px){.logged{grid-template-rows:auto auto auto;grid-template-columns:auto;row-gap:2rem}#footer-copyright{height:1rem;top:-2rem}}</style>`;

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

customElements.define("footer-component", Footer_component);

export { Footer_component as default };
