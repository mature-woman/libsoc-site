
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteElement, i as init, a as attribute_to_object, b as insert_dev, s as safe_not_equal, d as dispatch_dev, v as validate_slots, c as validate_store, e as component_subscribe, o as onMount, g as globals, f as empty, n as noop, h as detach_dev, j as validate_each_argument, k as element, t as text, l as space, m as add_location, p as attr_dev, q as src_url_equal, r as set_custom_element_data, u as append_dev, w as set_data_dev, x as destroy_each } from './index-d19aafba.js';
import { w as writable } from './index-4664ced0.js';
import { communesByCountry, addMarkersCommunes } from '../../../../../../../../../js/communes.js';
import { loadLocaleContent } from '../../../../../../../../../js/libraries/serverTools.js';
import '../../../../../../../../../js/components/map-component.js';

/* src\communes-component.svelte generated by Svelte v3.52.0 */

const { Object: Object_1 } = globals;

const file = "src\\communes-component.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i][0];
	child_ctx[10] = list[i][1];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[13] = list[i];
	return child_ctx;
}

// (39:4) {#if $loaded==2}
function create_if_block(ctx) {
	let div1;
	let div0;
	let h1;
	let t0_value = /*$content*/ ctx[0].communes + "";
	let t0;
	let t1;
	let img;
	let img_src_value;
	let t2;
	let p0;
	let t3_value = /*$content*/ ctx[0].p1 + "";
	let t3;
	let t4;
	let h3;
	let t5_value = /*$content*/ ctx[0].subheading1 + "";
	let t5;
	let t6;
	let map_component;
	let map_component_callback_value;
	let t7;
	let p1;
	let t8_value = /*$content*/ ctx[0]["map-prompt"] + "";
	let t8;
	let t9;
	let each_value = Object.entries(communesByCountry);
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t0 = text(t0_value);
			t1 = space();
			img = element("img");
			t2 = space();
			p0 = element("p");
			t3 = text(t3_value);
			t4 = space();
			h3 = element("h3");
			t5 = text(t5_value);
			t6 = space();
			map_component = element("map-component");
			t7 = space();
			p1 = element("p");
			t8 = text(t8_value);
			t9 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			add_location(h1, file, 42, 16, 1223);
			attr_dev(img, "id", "commune-img");
			if (!src_url_equal(img.src, img_src_value = "/img/common/commune.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "commune");
			add_location(img, file, 43, 16, 1269);
			attr_dev(p0, "class", "description");
			add_location(p0, file, 44, 16, 1353);
			add_location(h3, file, 45, 16, 1411);
			set_custom_element_data(map_component, "id", "map");
			set_custom_element_data(map_component, "callback", map_component_callback_value = /*func*/ ctx[8]);
			add_location(map_component, file, 46, 16, 1460);
			attr_dev(p1, "id", "add-prompt");
			add_location(p1, file, 47, 16, 1591);
			attr_dev(div0, "id", "text-container");
			add_location(div0, file, 41, 12, 1180);
			attr_dev(div1, "id", "container");
			add_location(div1, file, 39, 8, 1077);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t0);
			append_dev(div0, t1);
			append_dev(div0, img);
			append_dev(div0, t2);
			append_dev(div0, p0);
			append_dev(p0, t3);
			append_dev(div0, t4);
			append_dev(div0, h3);
			append_dev(h3, t5);
			append_dev(div0, t6);
			append_dev(div0, map_component);
			append_dev(div0, t7);
			append_dev(div0, p1);
			append_dev(p1, t8);
			append_dev(div0, t9);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$content*/ 1 && t0_value !== (t0_value = /*$content*/ ctx[0].communes + "")) set_data_dev(t0, t0_value);
			if (dirty & /*$content*/ 1 && t3_value !== (t3_value = /*$content*/ ctx[0].p1 + "")) set_data_dev(t3, t3_value);
			if (dirty & /*$content*/ 1 && t5_value !== (t5_value = /*$content*/ ctx[0].subheading1 + "")) set_data_dev(t5, t5_value);

			if (dirty & /*$content*/ 1 && map_component_callback_value !== (map_component_callback_value = /*func*/ ctx[8])) {
				set_custom_element_data(map_component, "callback", map_component_callback_value);
			}

			if (dirty & /*$content*/ 1 && t8_value !== (t8_value = /*$content*/ ctx[0]["map-prompt"] + "")) set_data_dev(t8, t8_value);

			if (dirty & /*Object, communesByCountry, $content, getAddress, getCountry*/ 193) {
				each_value = Object.entries(communesByCountry);
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(39:4) {#if $loaded==2}",
		ctx
	});

	return block;
}

// (52:24) {#each communes as commune}
function create_each_block_1(ctx) {
	let div;
	let p0;
	let b0;
	let t0_value = /*$content*/ ctx[0].location + "";
	let t0;
	let t1;
	let t2_value = /*getAddress*/ ctx[7](/*commune*/ ctx[13]) + "";
	let t2;
	let t3;
	let p1;
	let b1;
	let t4_value = /*$content*/ ctx[0].status + "";
	let t4;
	let t5;
	let t6_value = /*$content*/ ctx[0][/*commune*/ ctx[13].status] + "";
	let t6;
	let t7;
	let p2;
	let b2;
	let t8_value = /*$content*/ ctx[0].members + "";
	let t8;
	let t9;
	let t10_value = /*commune*/ ctx[13].members + "";
	let t10;
	let t11;
	let p3;
	let b3;
	let t12_value = /*$content*/ ctx[0].contact + "";
	let t12;
	let t13;
	let a;
	let t14_value = /*$content*/ ctx[0][/*commune*/ ctx[13].contact[1]] + "";
	let t14;

	const block = {
		c: function create() {
			div = element("div");
			p0 = element("p");
			b0 = element("b");
			t0 = text(t0_value);
			t1 = text(": ");
			t2 = text(t2_value);
			t3 = space();
			p1 = element("p");
			b1 = element("b");
			t4 = text(t4_value);
			t5 = text(": ");
			t6 = text(t6_value);
			t7 = space();
			p2 = element("p");
			b2 = element("b");
			t8 = text(t8_value);
			t9 = text(": ");
			t10 = text(t10_value);
			t11 = space();
			p3 = element("p");
			b3 = element("b");
			t12 = text(t12_value);
			t13 = text(": ");
			a = element("a");
			t14 = text(t14_value);
			add_location(b0, file, 53, 35, 1982);
			add_location(p0, file, 53, 32, 1979);
			add_location(b1, file, 54, 35, 2072);
			add_location(p1, file, 54, 32, 2069);
			add_location(b2, file, 55, 35, 2165);
			add_location(p2, file, 55, 32, 2162);
			add_location(b3, file, 56, 35, 2250);
			attr_dev(a, "href", /*commune*/ ctx[13].contact[0]);
			attr_dev(a, "target", ";_blank;");
			attr_dev(a, "rel", "noreferrer");
			add_location(a, file, 56, 62, 2277);
			add_location(p3, file, 56, 32, 2247);
			attr_dev(div, "class", "location-info");
			add_location(div, file, 52, 28, 1918);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, p0);
			append_dev(p0, b0);
			append_dev(b0, t0);
			append_dev(b0, t1);
			append_dev(p0, t2);
			append_dev(div, t3);
			append_dev(div, p1);
			append_dev(p1, b1);
			append_dev(b1, t4);
			append_dev(b1, t5);
			append_dev(p1, t6);
			append_dev(div, t7);
			append_dev(div, p2);
			append_dev(p2, b2);
			append_dev(b2, t8);
			append_dev(b2, t9);
			append_dev(p2, t10);
			append_dev(div, t11);
			append_dev(div, p3);
			append_dev(p3, b3);
			append_dev(b3, t12);
			append_dev(b3, t13);
			append_dev(p3, a);
			append_dev(a, t14);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$content*/ 1 && t0_value !== (t0_value = /*$content*/ ctx[0].location + "")) set_data_dev(t0, t0_value);
			if (dirty & /*$content*/ 1 && t4_value !== (t4_value = /*$content*/ ctx[0].status + "")) set_data_dev(t4, t4_value);
			if (dirty & /*$content*/ 1 && t6_value !== (t6_value = /*$content*/ ctx[0][/*commune*/ ctx[13].status] + "")) set_data_dev(t6, t6_value);
			if (dirty & /*$content*/ 1 && t8_value !== (t8_value = /*$content*/ ctx[0].members + "")) set_data_dev(t8, t8_value);
			if (dirty & /*$content*/ 1 && t12_value !== (t12_value = /*$content*/ ctx[0].contact + "")) set_data_dev(t12, t12_value);
			if (dirty & /*$content*/ 1 && t14_value !== (t14_value = /*$content*/ ctx[0][/*commune*/ ctx[13].contact[1]] + "")) set_data_dev(t14, t14_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(52:24) {#each communes as commune}",
		ctx
	});

	return block;
}

// (49:16) {#each Object.entries(communesByCountry) as [name,communes]}
function create_each_block(ctx) {
	let h4;
	let t0_value = /*getCountry*/ ctx[6](/*name*/ ctx[9]) + "";
	let t0;
	let t1;
	let div;
	let t2;
	let each_value_1 = /*communes*/ ctx[10];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const block = {
		c: function create() {
			h4 = element("h4");
			t0 = text(t0_value);
			t1 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = space();
			attr_dev(h4, "class", "country-name");
			add_location(h4, file, 49, 20, 1738);
			attr_dev(div, "class", "country-block");
			add_location(div, file, 50, 20, 1808);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h4, anchor);
			append_dev(h4, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			append_dev(div, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*Object, communesByCountry, $content, getAddress*/ 129) {
				each_value_1 = /*communes*/ ctx[10];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block_1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, t2);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value_1.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h4);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(49:16) {#each Object.entries(communesByCountry) as [name,communes]}",
		ctx
	});

	return block;
}

// (38:0) {#key $loaded}
function create_key_block(ctx) {
	let if_block_anchor;
	let if_block = /*$loaded*/ ctx[1] == 2 && create_if_block(ctx);

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
			if (/*$loaded*/ ctx[1] == 2) {
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
		source: "(38:0) {#key $loaded}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let previous_key = /*$loaded*/ ctx[1];
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
			if (dirty & /*$loaded*/ 2 && safe_not_equal(previous_key, previous_key = /*$loaded*/ ctx[1])) {
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
	let $content;
	let $loaded;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('communes-component', slots, []);
	let loaded = writable(0);
	validate_store(loaded, 'loaded');
	component_subscribe($$self, loaded, value => $$invalidate(1, $loaded = value));
	let content = writable({});
	validate_store(content, 'content');
	component_subscribe($$self, content, value => $$invalidate(0, $content = value));
	loadLocaleContent(content, "countries", loaded);
	let locale = loadLocaleContent(content, "communes-component", loaded);

	function mapCallbackCommunes(createMap, content, locale) {
		let map = createMap([22, 0], 2);
		addMarkersCommunes(map, content, locale);
	}

	function getCountry(name) {
		return locale == "en" ? name : $content[name];
	}

	function getAddress(group) {
		return group.location[0].map(x => locale == "en" ? x : $content[x]).join(", ");
	}

	onMount(() => {
		
	});

	const writable_props = [];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<communes-component> was created with unknown prop '${key}'`);
	});

	const func = createMap => mapCallbackCommunes(createMap, $content, locale);

	$$self.$capture_state = () => ({
		onMount,
		writable,
		communesByCountry,
		addMarkersCommunes,
		loadLocaleContent,
		loaded,
		content,
		locale,
		mapCallbackCommunes,
		getCountry,
		getAddress,
		$content,
		$loaded
	});

	$$self.$inject_state = $$props => {
		if ('loaded' in $$props) $$invalidate(2, loaded = $$props.loaded);
		if ('content' in $$props) $$invalidate(3, content = $$props.content);
		if ('locale' in $$props) $$invalidate(4, locale = $$props.locale);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		$content,
		$loaded,
		loaded,
		content,
		locale,
		mapCallbackCommunes,
		getCountry,
		getAddress,
		func
	];
}

class Communes_component extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>@import '/css/common.css';.description{margin-bottom:1rem}#add-prompt{margin-bottom:2rem}#commune-img{position:absolute;width:11.5rem;left:50%;transform:translate(-50%);z-index:0;opacity:0.2}#text-container>:nth-child(3){margin-top:8rem}.country-name{margin-bottom:0.5rem}.country-block{margin-bottom:2rem}.location-info{position:relative;margin-bottom:2rem}.location-info p{margin-bottom:0}a{color:#DD1C1A}#map{--height:30rem;--width:100%;--margin-bottom:0,5rem}#text-container{max-width:calc(100vw - 4rem);margin:auto}h1{margin-bottom:1rem;font-size:2.2rem;text-align:center}h3{margin-top:1rem;margin-bottom:1rem}#container{margin:auto;max-width:800px;margin-top:1rem;margin-bottom:4rem}#container p{text-align:justify}</style>`;

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

customElements.define("communes-component", Communes_component);

export { Communes_component as default };
