
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteElement, i as init, a as attribute_to_object, b as insert_dev, B as flush, s as safe_not_equal, f as validate_each_argument, d as dispatch_dev, v as validate_slots, o as onMount, g as globals, k as element, n as noop, p as attr_dev, m as add_location, j as detach_dev, x as destroy_each, C as binding_callbacks, l as space, t as text, D as set_style, u as append_dev, y as listen_dev, w as set_data_dev } from './index-42a25c61.js';
import { pullLegendData } from '../../../../../../../../../js/predict/charts.js';

/* src\components\legend-component.svelte generated by Svelte v3.52.0 */

const { Object: Object_1 } = globals;
const file = "src\\components\\legend-component.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[10] = list[i];
	child_ctx[11] = list;
	child_ctx[12] = i;
	return child_ctx;
}

// (69:4) {#each legendData as item, i}
function create_each_block(ctx) {
	let button;
	let div;
	let t0;
	let span;
	let t1_value = /*item*/ ctx[10].name + "";
	let t1;
	let t2;
	let i = /*i*/ ctx[12];
	let mounted;
	let dispose;
	const assign_button = () => /*button_binding*/ ctx[6](button, i);
	const unassign_button = () => /*button_binding*/ ctx[6](null, i);

	function click_handler() {
		return /*click_handler*/ ctx[7](/*i*/ ctx[12]);
	}

	const block = {
		c: function create() {
			button = element("button");
			div = element("div");
			t0 = space();
			span = element("span");
			t1 = text(t1_value);
			t2 = space();
			attr_dev(div, "class", "marker");
			set_style(div, "background-color", /*item*/ ctx[10].color);
			add_location(div, file, 70, 12, 1892);
			add_location(span, file, 71, 12, 1971);
			add_location(button, file, 69, 8, 1814);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, div);
			append_dev(button, t0);
			append_dev(button, span);
			append_dev(span, t1);
			append_dev(button, t2);
			assign_button();

			if (!mounted) {
				dispose = listen_dev(button, "click", click_handler, false, false, false);
				mounted = true;
			}
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;

			if (dirty & /*legendData*/ 1) {
				set_style(div, "background-color", /*item*/ ctx[10].color);
			}

			if (dirty & /*legendData*/ 1 && t1_value !== (t1_value = /*item*/ ctx[10].name + "")) set_data_dev(t1, t1_value);

			if (i !== /*i*/ ctx[12]) {
				unassign_button();
				i = /*i*/ ctx[12];
				assign_button();
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			unassign_button();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(69:4) {#each legendData as item, i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div;
	let each_value = /*legendData*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.c = noop;
			attr_dev(div, "class", "legend");
			add_location(div, file, 67, 0, 1749);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*buttons, toggleSeries, legendData*/ 7) {
				each_value = /*legendData*/ ctx[0];
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
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
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
	validate_slots('legend-component', slots, []);
	let { option = null } = $$props;
	let { chart = null } = $$props;
	let { data = {} } = $$props;

	// Main code
	let legendData = [];

	let buttons = [];
	let dataKeys;

	function init() {
		if (option == null || option == undefined || chart == null || chart == undefined) {
			setTimeout(init, 100);
		} else {
			$$invalidate(0, legendData = pullLegendData(legendData, option));

			for (let obj of legendData) {
				$$invalidate(3, data[obj.name] = true, data);
			}

			dataKeys = Object.keys(data);
		}
	}

	function toggleSeries(i) {
		$$invalidate(3, data[dataKeys[i]] = !data[dataKeys[i]], data);
		let inds = [];
		let ids = option.series.map(x => x._id);
		let id = ids[i];

		for (let j = 0; j < ids.length; j++) {
			if (ids[j] == id) {
				inds.push(j);
			}
		}

		for (let i of inds) {
			let series = option.series[i];

			if (!series.tooltip.show) {
				series.lineStyle.opacity = 1;
				series.itemStyle.opacity = 1;
				series.tooltip.show = true;
				$$invalidate(1, buttons[inds[0]].style.opacity = 1, buttons);
			} else {
				series.lineStyle.opacity = 0;
				series.itemStyle.opacity = 0;
				series.tooltip.show = false;
				$$invalidate(1, buttons[inds[0]].style.opacity = 0.5, buttons);
			}
		}

		chart.setOption(option);
	}

	onMount(() => {
		init();
	});

	const writable_props = ['option', 'chart', 'data'];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<legend-component> was created with unknown prop '${key}'`);
	});

	function button_binding($$value, i) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			buttons[i] = $$value;
			$$invalidate(1, buttons);
		});
	}

	const click_handler = i => toggleSeries(i);

	$$self.$$set = $$props => {
		if ('option' in $$props) $$invalidate(4, option = $$props.option);
		if ('chart' in $$props) $$invalidate(5, chart = $$props.chart);
		if ('data' in $$props) $$invalidate(3, data = $$props.data);
	};

	$$self.$capture_state = () => ({
		onMount,
		pullLegendData,
		option,
		chart,
		data,
		legendData,
		buttons,
		dataKeys,
		init,
		toggleSeries
	});

	$$self.$inject_state = $$props => {
		if ('option' in $$props) $$invalidate(4, option = $$props.option);
		if ('chart' in $$props) $$invalidate(5, chart = $$props.chart);
		if ('data' in $$props) $$invalidate(3, data = $$props.data);
		if ('legendData' in $$props) $$invalidate(0, legendData = $$props.legendData);
		if ('buttons' in $$props) $$invalidate(1, buttons = $$props.buttons);
		if ('dataKeys' in $$props) dataKeys = $$props.dataKeys;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		legendData,
		buttons,
		toggleSeries,
		data,
		option,
		chart,
		button_binding,
		click_handler
	];
}

class Legend_component extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>@import '/css/common.css';@import '/css/test-basic.css';button{cursor:pointer}.legend{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;gap:1rem}.legend *{font-family:var(--sans-serif)}.marker{position:relative;display:inline-block;margin-right:0.5rem;top:0.1rem;width:1rem;height:1rem;border-radius:1rem}</style>`;

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
			{ option: 4, chart: 5, data: 3 },
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
		return ["option", "chart", "data"];
	}

	get option() {
		return this.$$.ctx[4];
	}

	set option(option) {
		this.$$set({ option });
		flush();
	}

	get chart() {
		return this.$$.ctx[5];
	}

	set chart(chart) {
		this.$$set({ chart });
		flush();
	}

	get data() {
		return this.$$.ctx[3];
	}

	set data(data) {
		this.$$set({ data });
		flush();
	}
}

customElements.define("legend-component", Legend_component);

export { Legend_component as default };
