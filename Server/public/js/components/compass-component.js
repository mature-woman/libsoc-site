
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteElement, i as init, a as attribute_to_object, b as insert_dev, s as safe_not_equal, d as dispatch_dev, v as validate_slots, c as validate_store, e as component_subscribe, o as onMount, g as globals, h as empty, n as noop, j as detach_dev, k as element, t as text, l as space, m as add_location, p as attr_dev, q as src_url_equal, u as append_dev, w as set_data_dev, f as validate_each_argument, y as listen_dev, x as destroy_each, z as run_all, A as prop_dev } from './index-42a25c61.js';
import { w as writable } from './index-a1c185ea.js';
import { loadLocaleContent } from '../../../../../../../../../js/libraries/serverTools.js';
import { shuffleArray } from '../../../../../../../../../js/libraries/miscTools.js';

/* src\compass-component.svelte generated by Svelte v3.52.0 */

const { Object: Object_1 } = globals;
const file = "src\\compass-component.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[18] = list[i];
	child_ctx[20] = i;
	return child_ctx;
}

// (56:4) {#if Object.keys($content).length!=0}
function create_if_block(ctx) {
	let div1;
	let div0;
	let h1;
	let t0_value = /*$content*/ ctx[5].heading + "";
	let t0;
	let t1;
	let img;
	let img_src_value;
	let t2;
	let previous_key = /*qTag*/ ctx[0];
	let key_block = create_key_block(ctx);

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t0 = text(t0_value);
			t1 = space();
			img = element("img");
			t2 = space();
			key_block.c();
			add_location(h1, file, 58, 16, 1714);
			attr_dev(img, "id", "compass-img");
			if (!src_url_equal(img.src, img_src_value = "/img/common/compass.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "compass");
			add_location(img, file, 59, 16, 1759);
			attr_dev(div0, "id", "text-container");
			add_location(div0, file, 57, 12, 1671);
			attr_dev(div1, "id", "container");
			add_location(div1, file, 56, 8, 1637);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t0);
			append_dev(div0, t1);
			append_dev(div0, img);
			append_dev(div0, t2);
			key_block.m(div0, null);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$content*/ 32 && t0_value !== (t0_value = /*$content*/ ctx[5].heading + "")) set_data_dev(t0, t0_value);

			if (dirty & /*qTag*/ 1 && safe_not_equal(previous_key, previous_key = /*qTag*/ ctx[0])) {
				key_block.d(1);
				key_block = create_key_block(ctx);
				key_block.c();
				key_block.m(div0, null);
			} else {
				key_block.p(ctx, dirty);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			key_block.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(56:4) {#if Object.keys($content).length!=0}",
		ctx
	});

	return block;
}

// (73:16) {:else}
function create_else_block(ctx) {
	let p;
	let t1;
	let ul;
	let li0;
	let t2;
	let span0;
	let t3;
	let t4;
	let t5;
	let li1;
	let t6;
	let span1;
	let t7;
	let t8;
	let t9;
	let li2;
	let t10;
	let span2;
	let t11;
	let t12;
	let t13;
	let button;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			p = element("p");
			p.textContent = "You are compatible with ...";
			t1 = space();
			ul = element("ul");
			li0 = element("li");
			t2 = text("capitalism by ");
			span0 = element("span");
			t3 = text(/*capitalismScore*/ ctx[2]);
			t4 = text("%");
			t5 = space();
			li1 = element("li");
			t6 = text("vanguardism by ");
			span1 = element("span");
			t7 = text(/*vanguardismScore*/ ctx[3]);
			t8 = text("%");
			t9 = space();
			li2 = element("li");
			t10 = text("libertarian socialism by ");
			span2 = element("span");
			t11 = text(/*socialismScore*/ ctx[4]);
			t12 = text("%");
			t13 = space();
			button = element("button");
			button.textContent = "back";
			add_location(p, file, 73, 20, 2686);
			add_location(span0, file, 75, 42, 2811);
			add_location(li0, file, 75, 24, 2793);
			add_location(span1, file, 76, 43, 2892);
			add_location(li1, file, 76, 24, 2873);
			add_location(span2, file, 77, 53, 2984);
			add_location(li2, file, 77, 24, 2955);
			attr_dev(ul, "class", "results-list");
			add_location(ul, file, 74, 20, 2742);
			attr_dev(button, "class", "quiz-buttons");
			add_location(button, file, 79, 20, 3068);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			append_dev(li0, t2);
			append_dev(li0, span0);
			append_dev(span0, t3);
			append_dev(li0, t4);
			append_dev(ul, t5);
			append_dev(ul, li1);
			append_dev(li1, t6);
			append_dev(li1, span1);
			append_dev(span1, t7);
			append_dev(li1, t8);
			append_dev(ul, t9);
			append_dev(ul, li2);
			append_dev(li2, t10);
			append_dev(li2, span2);
			append_dev(span2, t11);
			append_dev(li2, t12);
			insert_dev(target, t13, anchor);
			insert_dev(target, button, anchor);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*click_handler_3*/ ctx[15], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*capitalismScore*/ 4) set_data_dev(t3, /*capitalismScore*/ ctx[2]);
			if (dirty & /*vanguardismScore*/ 8) set_data_dev(t7, /*vanguardismScore*/ ctx[3]);
			if (dirty & /*socialismScore*/ 16) set_data_dev(t11, /*socialismScore*/ ctx[4]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(ul);
			if (detaching) detach_dev(t13);
			if (detaching) detach_dev(button);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(73:16) {:else}",
		ctx
	});

	return block;
}

// (62:16) {#if qTag!=$content.qs.length}
function create_if_block_1(ctx) {
	let p;
	let t0_value = /*$content*/ ctx[5].qs[/*qTag*/ ctx[0]].q + "";
	let t0;
	let t1;
	let div;
	let t2;
	let button0;
	let button1;
	let mounted;
	let dispose;
	let each_value = /*$content*/ ctx[5].qs[/*qTag*/ ctx[0]].as;
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			p = element("p");
			t0 = text(t0_value);
			t1 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t2 = space();
			button0 = element("button");
			button0.textContent = "back";
			button1 = element("button");
			button1.textContent = "next";
			add_location(p, file, 62, 20, 1924);
			attr_dev(div, "class", "quiz-inputs");
			add_location(div, file, 63, 20, 1974);
			attr_dev(button0, "class", "quiz-buttons");
			add_location(button0, file, 71, 20, 2499);
			attr_dev(button1, "class", "quiz-buttons");
			add_location(button1, file, 71, 90, 2569);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			insert_dev(target, t2, anchor);
			insert_dev(target, button0, anchor);
			insert_dev(target, button1, anchor);

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*click_handler_1*/ ctx[13], false, false, false),
					listen_dev(button1, "click", /*click_handler_2*/ ctx[14], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$content, qTag*/ 33 && t0_value !== (t0_value = /*$content*/ ctx[5].qs[/*qTag*/ ctx[0]].q + "")) set_data_dev(t0, t0_value);

			if (dirty & /*answers, qTag, $content*/ 35) {
				each_value = /*$content*/ ctx[5].qs[/*qTag*/ ctx[0]].as;
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
			if (detaching) detach_dev(p);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(button0);
			if (detaching) detach_dev(button1);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(62:16) {#if qTag!=$content.qs.length}",
		ctx
	});

	return block;
}

// (65:24) {#each $content.qs[qTag].as as a,i}
function create_each_block(ctx) {
	let div;
	let input;
	let input_value_value;
	let t0;
	let button;
	let t1_value = /*a*/ ctx[18][0] + "";
	let t1;
	let t2;
	let mounted;
	let dispose;

	function click_handler() {
		return /*click_handler*/ ctx[12](/*a*/ ctx[18]);
	}

	const block = {
		c: function create() {
			div = element("div");
			input = element("input");
			t0 = space();
			button = element("button");
			t1 = text(t1_value);
			t2 = space();
			attr_dev(input, "type", "radio");
			attr_dev(input, "id", "option" + /*i*/ ctx[20]);
			attr_dev(input, "name", "options");
			input.__value = input_value_value = /*a*/ ctx[18][1];
			input.value = input.__value;
			/*$$binding_groups*/ ctx[11][0].push(input);
			add_location(input, file, 66, 32, 2153);
			attr_dev(button, "class", "input-label");
			attr_dev(button, "for", "option" + /*i*/ ctx[20]);
			add_location(button, file, 67, 32, 2278);
			attr_dev(div, "class", "radio-container");
			add_location(div, file, 65, 28, 2090);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, input);
			input.checked = input.__value === /*answers*/ ctx[1][/*qTag*/ ctx[0]];
			append_dev(div, t0);
			append_dev(div, button);
			append_dev(button, t1);
			append_dev(div, t2);

			if (!mounted) {
				dispose = [
					listen_dev(input, "change", /*input_change_handler*/ ctx[10]),
					listen_dev(button, "click", click_handler, false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*$content, qTag*/ 33 && input_value_value !== (input_value_value = /*a*/ ctx[18][1])) {
				prop_dev(input, "__value", input_value_value);
				input.value = input.__value;
			}

			if (dirty & /*answers, qTag*/ 3) {
				input.checked = input.__value === /*answers*/ ctx[1][/*qTag*/ ctx[0]];
			}

			if (dirty & /*$content, qTag*/ 33 && t1_value !== (t1_value = /*a*/ ctx[18][0] + "")) set_data_dev(t1, t1_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			/*$$binding_groups*/ ctx[11][0].splice(/*$$binding_groups*/ ctx[11][0].indexOf(input), 1);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(65:24) {#each $content.qs[qTag].as as a,i}",
		ctx
	});

	return block;
}

// (61:16) {#key qTag}
function create_key_block(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*qTag*/ ctx[0] != /*$content*/ ctx[5].qs.length) return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d: function destroy(detaching) {
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_key_block.name,
		type: "key",
		source: "(61:16) {#key qTag}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let show_if = Object.keys(/*$content*/ ctx[5]).length != 0;
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
			if (dirty & /*$content*/ 32) show_if = Object.keys(/*$content*/ ctx[5]).length != 0;

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
	validate_slots('compass-component', slots, []);
	let loaded;
	let content = writable({});
	validate_store(content, 'content');
	component_subscribe($$self, content, value => $$invalidate(5, $content = value));
	let locale = loadLocaleContent(content, "compass-component", loaded, contentCallback);
	let qTag = 0;
	let answers = [];
	let capitalismScore = "";
	let vanguardismScore = "";
	let socialismScore = "";

	function contentCallback(content) {
		for (let q of content.qs) {
			shuffleArray(q.as);
		}
	}

	function next(i) {
		if (answers[i] != undefined) {
			if (qTag < $content.qs.length) {
				if (qTag == $content.qs.length - 1) {
					$$invalidate(2, capitalismScore = Math.round(answers.map(x => x.includes("C")).filter(Boolean).length * 100 / answers.length).toString());
					$$invalidate(3, vanguardismScore = Math.round(answers.map(x => x.includes("V")).filter(Boolean).length * 100 / answers.length).toString());
					$$invalidate(4, socialismScore = Math.round(answers.map(x => x.includes("LS")).filter(Boolean).length * 100 / answers.length).toString());
				}

				$$invalidate(0, qTag = qTag + 1);
			}
		}
	}

	function back(i) {
		if (qTag != 0) {
			$$invalidate(0, qTag = qTag - 1);
		}
	}

	onMount(() => {
		
	});

	const writable_props = [];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<compass-component> was created with unknown prop '${key}'`);
	});

	const $$binding_groups = [[]];

	function input_change_handler() {
		answers[qTag] = this.__value;
		$$invalidate(1, answers);
	}

	const click_handler = a => $$invalidate(1, answers[qTag] = a[1], answers);
	const click_handler_1 = () => back();
	const click_handler_2 = () => next(qTag);
	const click_handler_3 = () => back();

	$$self.$capture_state = () => ({
		onMount,
		writable,
		loadLocaleContent,
		shuffleArray,
		loaded,
		content,
		locale,
		qTag,
		answers,
		capitalismScore,
		vanguardismScore,
		socialismScore,
		contentCallback,
		next,
		back,
		$content
	});

	$$self.$inject_state = $$props => {
		if ('loaded' in $$props) $$invalidate(6, loaded = $$props.loaded);
		if ('content' in $$props) $$invalidate(7, content = $$props.content);
		if ('locale' in $$props) locale = $$props.locale;
		if ('qTag' in $$props) $$invalidate(0, qTag = $$props.qTag);
		if ('answers' in $$props) $$invalidate(1, answers = $$props.answers);
		if ('capitalismScore' in $$props) $$invalidate(2, capitalismScore = $$props.capitalismScore);
		if ('vanguardismScore' in $$props) $$invalidate(3, vanguardismScore = $$props.vanguardismScore);
		if ('socialismScore' in $$props) $$invalidate(4, socialismScore = $$props.socialismScore);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		qTag,
		answers,
		capitalismScore,
		vanguardismScore,
		socialismScore,
		$content,
		loaded,
		content,
		next,
		back,
		input_change_handler,
		$$binding_groups,
		click_handler,
		click_handler_1,
		click_handler_2,
		click_handler_3
	];
}

class Compass_component extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>@import '/css/common.css';.results-list{margin-left:2rem;margin-bottom:2rem}.results-list li{margin-bottom:0.5rem}.radio-container{display:grid;grid-template-columns:min-content auto;margin-bottom:1rem}.quiz-inputs{position:relative;margin-bottom:2rem}.quiz-inputs input{position:relative;top:-0.1rem;height:1.2rem;width:1.2rem;margin:auto;accent-color:#DD1C1A;cursor:pointer}.quiz-inputs button{font-family:var(--serif,serif);font-size:1.15rem;margin-left:1rem;position:relative;top:-0.2rem;text-align:left}.quiz-buttons:nth-of-type(1){margin-right:2rem}.quiz-buttons{font-size:1.3rem;color:white;padding:1.5rem;padding-top:0.5rem;padding-bottom:0.5rem;background-color:#5B6970;border-radius:1rem}#compass-img{position:absolute;width:9rem;left:50%;transform:translate(-50%);z-index:0;opacity:0.2}#text-container>:nth-child(3){margin-top:8rem}#map{--height:30rem;--width:100%;--margin-bottom:3rem}#text-container{max-width:calc(100vw - 4rem);margin:auto}h1{margin-bottom:1rem;font-size:2.2rem;text-align:center}#container{margin:auto;max-width:800px;margin-top:1rem;margin-bottom:4rem}#container>div>p{margin-bottom:1rem}#container p{text-align:justify}</style>`;

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

customElements.define("compass-component", Compass_component);

export { Compass_component as default };
