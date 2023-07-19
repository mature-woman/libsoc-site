
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteElement, i as init, a as attribute_to_object, b as insert_dev, s as safe_not_equal, d as dispatch_dev, v as validate_slots, c as validate_store, e as component_subscribe, o as onMount, g as globals, f as empty, n as noop, h as detach_dev, j as validate_each_argument, k as element, t as text, l as space, m as add_location, p as attr_dev, q as src_url_equal, u as append_dev, w as set_data_dev, x as destroy_each } from './index-d19aafba.js';
import { w as writable } from './index-4664ced0.js';
import { loadLocaleContent } from '../../../../../../../../../js/libraries/serverTools.js';
import { partnersByCountry } from '../../../../../../../../../js/partners.js';
import '../../../../../../../../../js/components/map-component.js';

/* src\partners-component.svelte generated by Svelte v3.52.0 */

const { Object: Object_1 } = globals;

const file = "src\\partners-component.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i][0];
	child_ctx[8] = list[i][1];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[11] = list[i];
	return child_ctx;
}

// (34:4) {#if $loaded==2}
function create_if_block(ctx) {
	let div1;
	let div0;
	let h1;
	let t0_value = /*$content*/ ctx[0].heading + "";
	let t0;
	let t1;
	let img;
	let img_src_value;
	let t2;
	let p;
	let t3_value = /*$content*/ ctx[0].p1 + "";
	let t3;
	let t4;
	let h3;
	let t5_value = /*$content*/ ctx[0].subheading1 + "";
	let t5;
	let t6;
	let each_value = Object.entries(partnersByCountry);
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
			p = element("p");
			t3 = text(t3_value);
			t4 = space();
			h3 = element("h3");
			t5 = text(t5_value);
			t6 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			add_location(h1, file, 37, 16, 1044);
			attr_dev(img, "id", "hands-img");
			if (!src_url_equal(img.src, img_src_value = "/img/common/handshake.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "hands");
			add_location(img, file, 38, 16, 1089);
			add_location(p, file, 39, 16, 1171);
			add_location(h3, file, 40, 16, 1209);
			attr_dev(div0, "id", "text-container");
			add_location(div0, file, 36, 12, 1001);
			attr_dev(div1, "id", "container");
			add_location(div1, file, 34, 8, 898);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t0);
			append_dev(div0, t1);
			append_dev(div0, img);
			append_dev(div0, t2);
			append_dev(div0, p);
			append_dev(p, t3);
			append_dev(div0, t4);
			append_dev(div0, h3);
			append_dev(h3, t5);
			append_dev(div0, t6);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$content*/ 1 && t0_value !== (t0_value = /*$content*/ ctx[0].heading + "")) set_data_dev(t0, t0_value);
			if (dirty & /*$content*/ 1 && t3_value !== (t3_value = /*$content*/ ctx[0].p1 + "")) set_data_dev(t3, t3_value);
			if (dirty & /*$content*/ 1 && t5_value !== (t5_value = /*$content*/ ctx[0].subheading1 + "")) set_data_dev(t5, t5_value);

			if (dirty & /*Object, partnersByCountry, $content, getAddress, getCountry*/ 49) {
				each_value = Object.entries(partnersByCountry);
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
		source: "(34:4) {#if $loaded==2}",
		ctx
	});

	return block;
}

// (45:24) {#each partners as partner}
function create_each_block_1(ctx) {
	let div2;
	let div1;
	let picture;
	let source0;
	let t0;
	let source1;
	let t1;
	let img;
	let t2;
	let div0;
	let p0;
	let b0;
	let t3_value = /*$content*/ ctx[0].name + "";
	let t3;
	let t4;
	let t5_value = /*partner*/ ctx[11].name + "";
	let t5;
	let t6;
	let p1;
	let b1;
	let t7_value = /*$content*/ ctx[0].type + "";
	let t7;
	let t8;
	let t9_value = /*$content*/ ctx[0][/*partner*/ ctx[11].type] + "";
	let t9;
	let t10;
	let p2;
	let b2;
	let t11_value = /*$content*/ ctx[0].location + "";
	let t11;
	let t12;
	let t13_value = /*getAddress*/ ctx[5](/*partner*/ ctx[11]) + "";
	let t13;
	let t14;
	let p3;
	let b3;
	let t15_value = /*$content*/ ctx[0].link + "";
	let t15;
	let t16;
	let a;
	let t17_value = /*partner*/ ctx[11].link + "";
	let t17;
	let t18;
	let p4;
	let b4;
	let t19_value = /*$content*/ ctx[0].description + "";
	let t19;
	let t20;
	let t21_value = /*$content*/ ctx[0][/*partner*/ ctx[11].description] + "";
	let t21;

	const block = {
		c: function create() {
			div2 = element("div");
			div1 = element("div");
			picture = element("picture");
			source0 = element("source");
			t0 = space();
			source1 = element("source");
			t1 = space();
			img = element("img");
			t2 = space();
			div0 = element("div");
			p0 = element("p");
			b0 = element("b");
			t3 = text(t3_value);
			t4 = text(": ");
			t5 = text(t5_value);
			t6 = space();
			p1 = element("p");
			b1 = element("b");
			t7 = text(t7_value);
			t8 = text(": ");
			t9 = text(t9_value);
			t10 = space();
			p2 = element("p");
			b2 = element("b");
			t11 = text(t11_value);
			t12 = text(": ");
			t13 = text(t13_value);
			t14 = space();
			p3 = element("p");
			b3 = element("b");
			t15 = text(t15_value);
			t16 = text(": ");
			a = element("a");
			t17 = text(t17_value);
			t18 = space();
			p4 = element("p");
			b4 = element("b");
			t19 = text(t19_value);
			t20 = text(": ");
			t21 = text(t21_value);
			attr_dev(source0, "srcset", "/img/partners/" + /*partner*/ ctx[11].logo + ".webp");
			add_location(source0, file, 48, 36, 1684);
			attr_dev(source1, "srcset", "/img/partners/" + /*partner*/ ctx[11].logo + ".jpg");
			add_location(source1, file, 49, 36, 1777);
			attr_dev(img, "class", "partner-logo");
			attr_dev(img, "alt", "logo");
			add_location(img, file, 50, 36, 1869);
			add_location(picture, file, 47, 32, 1637);
			add_location(b0, file, 53, 39, 2030);
			add_location(p0, file, 53, 36, 2027);
			add_location(b1, file, 54, 39, 2113);
			add_location(p1, file, 54, 36, 2110);
			add_location(b2, file, 55, 39, 2206);
			add_location(p2, file, 55, 36, 2203);
			add_location(b3, file, 56, 39, 2300);
			attr_dev(a, "href", /*partner*/ ctx[11].link);
			attr_dev(a, "target", ";_blank;");
			attr_dev(a, "rel", "noreferrer");
			add_location(a, file, 56, 63, 2324);
			add_location(p3, file, 56, 36, 2297);
			add_location(div0, file, 52, 32, 1984);
			attr_dev(div1, "class", "img-general-info");
			add_location(div1, file, 46, 28, 1573);
			add_location(b4, file, 59, 31, 2509);
			add_location(p4, file, 59, 28, 2506);
			attr_dev(div2, "class", "location-info");
			add_location(div2, file, 45, 24, 1516);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div1);
			append_dev(div1, picture);
			append_dev(picture, source0);
			append_dev(picture, t0);
			append_dev(picture, source1);
			append_dev(picture, t1);
			append_dev(picture, img);
			append_dev(div1, t2);
			append_dev(div1, div0);
			append_dev(div0, p0);
			append_dev(p0, b0);
			append_dev(b0, t3);
			append_dev(b0, t4);
			append_dev(p0, t5);
			append_dev(div0, t6);
			append_dev(div0, p1);
			append_dev(p1, b1);
			append_dev(b1, t7);
			append_dev(b1, t8);
			append_dev(p1, t9);
			append_dev(div0, t10);
			append_dev(div0, p2);
			append_dev(p2, b2);
			append_dev(b2, t11);
			append_dev(b2, t12);
			append_dev(p2, t13);
			append_dev(div0, t14);
			append_dev(div0, p3);
			append_dev(p3, b3);
			append_dev(b3, t15);
			append_dev(b3, t16);
			append_dev(p3, a);
			append_dev(a, t17);
			append_dev(div2, t18);
			append_dev(div2, p4);
			append_dev(p4, b4);
			append_dev(b4, t19);
			append_dev(b4, t20);
			append_dev(p4, t21);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$content*/ 1 && t3_value !== (t3_value = /*$content*/ ctx[0].name + "")) set_data_dev(t3, t3_value);
			if (dirty & /*$content*/ 1 && t7_value !== (t7_value = /*$content*/ ctx[0].type + "")) set_data_dev(t7, t7_value);
			if (dirty & /*$content*/ 1 && t9_value !== (t9_value = /*$content*/ ctx[0][/*partner*/ ctx[11].type] + "")) set_data_dev(t9, t9_value);
			if (dirty & /*$content*/ 1 && t11_value !== (t11_value = /*$content*/ ctx[0].location + "")) set_data_dev(t11, t11_value);
			if (dirty & /*$content*/ 1 && t15_value !== (t15_value = /*$content*/ ctx[0].link + "")) set_data_dev(t15, t15_value);
			if (dirty & /*$content*/ 1 && t19_value !== (t19_value = /*$content*/ ctx[0].description + "")) set_data_dev(t19, t19_value);
			if (dirty & /*$content*/ 1 && t21_value !== (t21_value = /*$content*/ ctx[0][/*partner*/ ctx[11].description] + "")) set_data_dev(t21, t21_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(45:24) {#each partners as partner}",
		ctx
	});

	return block;
}

// (42:16) {#each Object.entries(partnersByCountry) as [name,partners]}
function create_each_block(ctx) {
	let h4;
	let t0_value = /*getCountry*/ ctx[4](/*name*/ ctx[7]) + "";
	let t0;
	let t1;
	let div;
	let t2;
	let each_value_1 = /*partners*/ ctx[8];
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
			add_location(h4, file, 42, 20, 1340);
			attr_dev(div, "class", "country-block");
			add_location(div, file, 43, 20, 1410);
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
			if (dirty & /*$content, Object, partnersByCountry, getAddress*/ 33) {
				each_value_1 = /*partners*/ ctx[8];
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
		source: "(42:16) {#each Object.entries(partnersByCountry) as [name,partners]}",
		ctx
	});

	return block;
}

// (33:0) {#key $loaded}
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
		source: "(33:0) {#key $loaded}",
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
	validate_slots('partners-component', slots, []);
	let loaded = writable(0);
	validate_store(loaded, 'loaded');
	component_subscribe($$self, loaded, value => $$invalidate(1, $loaded = value));
	let content = writable({});
	validate_store(content, 'content');
	component_subscribe($$self, content, value => $$invalidate(0, $content = value));
	loadLocaleContent(content, "countries", loaded);
	let locale = loadLocaleContent(content, "partners-component", loaded);

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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<partners-component> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		onMount,
		writable,
		loadLocaleContent,
		partnersByCountry,
		loaded,
		content,
		locale,
		getCountry,
		getAddress,
		$content,
		$loaded
	});

	$$self.$inject_state = $$props => {
		if ('loaded' in $$props) $$invalidate(2, loaded = $$props.loaded);
		if ('content' in $$props) $$invalidate(3, content = $$props.content);
		if ('locale' in $$props) locale = $$props.locale;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [$content, $loaded, loaded, content, getCountry, getAddress];
}

class Partners_component extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>@import '/css/common.css';#hands-img{position:absolute;width:10.5rem;left:50%;transform:translate(-50%);z-index:0;opacity:0.2;margin-top:-2rem}#text-container>:nth-child(3){margin-top:6rem}.img-general-info{display:flex;align-content:center;width:100%;gap:1.5rem;align-items:center;margin-bottom:0.5rem}.img-general-info>:nth-child(2){flex:none}.partner-logo{position:relative;right:0;max-height:6.5rem;max-width:100%;border-radius:1rem}h4{margin-bottom:2rem}.country-name{margin-bottom:0.5rem}.country-block{margin-bottom:2rem}.location-info{position:relative;margin-bottom:0.5rem}.location-info p{margin-bottom:0}a{color:#DD1C1A}#text-container{max-width:calc(100vw - 4rem);margin:auto}h1{margin-bottom:1rem;font-size:2.2rem;text-align:center}h3{margin-bottom:2rem}#container{margin:auto;max-width:800px;margin-top:1rem;margin-bottom:4rem}#container>div>p{margin-bottom:1rem}#container p{text-align:justify}@media only screen and (max-width: 500px){.img-general-info{display:flex;flex-direction:column;align-content:left;width:100%;gap:1rem;align-items:left;margin-bottom:0rem}.img-general-info>:nth-child(1){width:max-content}.img-general-info>:nth-child(2){width:100%}}</style>`;

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

customElements.define("partners-component", Partners_component);

export { Partners_component as default };
