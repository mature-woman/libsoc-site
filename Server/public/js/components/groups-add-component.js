
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { S as SvelteElement, i as init, a as attribute_to_object, b as insert_dev, s as safe_not_equal, d as dispatch_dev, v as validate_slots, c as validate_store, e as component_subscribe, o as onMount, f as empty, n as noop, h as detach_dev, C as binding_callbacks, k as element, l as space, m as add_location, p as attr_dev, q as src_url_equal, r as set_custom_element_data, u as append_dev, y as listen_dev } from './index-d19aafba.js';
import { w as writable } from './index-4664ced0.js';
import { groupsByCountry, addMarkersGroups } from '../../../../../../../../../js/groups.js';
import { loadLocaleContent, getData, sendText } from '../../../../../../../../../js/libraries/serverTools.js';
import '../../../../../../../../../js/components/map-component.js';

/* src\groups-add-component.svelte generated by Svelte v3.52.0 */

const file = "src\\groups-add-component.svelte";

// (106:4) {#if $loaded==2}
function create_if_block(ctx) {
	let div1;
	let div0;
	let h1;
	let t1;
	let img;
	let img_src_value;
	let t2;
	let p;
	let t4;
	let ol;
	let li0;
	let t6;
	let li1;
	let t8;
	let li2;
	let t10;
	let label0;
	let input0;
	let br;
	let t12;
	let label1;
	let input1;
	let t14;
	let button;
	let t16;
	let map_component;
	let map_component_callback_value;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			h1.textContent = "Add a Group";
			t1 = space();
			img = element("img");
			t2 = space();
			p = element("p");
			p.textContent = "If there are no groups in your town with whom you can organize then";
			t4 = space();
			ol = element("ol");
			li0 = element("li");
			li0.textContent = "click on the map to show us where you are located,";
			t6 = space();
			li1 = element("li");
			li1.textContent = "add a way to contact you or leave blank for a pin to point to our discord and";
			t8 = space();
			li2 = element("li");
			li2.textContent = "press \"Submit\" to add yourself to our map";
			t10 = space();
			label0 = element("label");
			label0.textContent = "Location: ";
			input0 = element("input");
			br = element("br");
			t12 = space();
			label1 = element("label");
			label1.textContent = "Contact: ";
			input1 = element("input");
			t14 = space();
			button = element("button");
			button.textContent = "Submit";
			t16 = space();
			map_component = element("map-component");
			add_location(h1, file, 109, 16, 3516);
			attr_dev(img, "id", "groups-img");
			if (!src_url_equal(img.src, img_src_value = "/img/common/groups.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "groups");
			add_location(img, file, 110, 16, 3554);
			attr_dev(p, "class", "description");
			add_location(p, file, 111, 16, 3635);
			add_location(li0, file, 113, 20, 3773);
			add_location(li1, file, 114, 20, 3854);
			add_location(li2, file, 115, 20, 3962);
			add_location(ol, file, 112, 16, 3747);
			attr_dev(label0, "for", "address-input");
			add_location(label0, file, 117, 16, 4053);
			attr_dev(input0, "id", "address-input");
			attr_dev(input0, "type", "text");
			input0.readOnly = true;
			add_location(input0, file, 117, 61, 4098);
			add_location(br, file, 117, 133, 4170);
			attr_dev(label1, "for", "contact-input");
			add_location(label1, file, 118, 16, 4192);
			attr_dev(input1, "id", "contact-input");
			attr_dev(input1, "type", "text");
			add_location(input1, file, 118, 60, 4236);
			attr_dev(button, "id", "submit-button");
			add_location(button, file, 119, 16, 4317);
			set_custom_element_data(map_component, "id", "map");
			set_custom_element_data(map_component, "callback", map_component_callback_value = /*func*/ ctx[10]);
			add_location(map_component, file, 120, 16, 4403);
			attr_dev(div0, "id", "text-container");
			add_location(div0, file, 108, 12, 3473);
			attr_dev(div1, "id", "container");
			add_location(div1, file, 106, 8, 3370);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(div0, t1);
			append_dev(div0, img);
			append_dev(div0, t2);
			append_dev(div0, p);
			append_dev(div0, t4);
			append_dev(div0, ol);
			append_dev(ol, li0);
			append_dev(ol, t6);
			append_dev(ol, li1);
			append_dev(ol, t8);
			append_dev(ol, li2);
			append_dev(div0, t10);
			append_dev(div0, label0);
			append_dev(div0, input0);
			/*input0_binding*/ ctx[8](input0);
			append_dev(div0, br);
			append_dev(div0, t12);
			append_dev(div0, label1);
			append_dev(div0, input1);
			/*input1_binding*/ ctx[9](input1);
			append_dev(div0, t14);
			append_dev(div0, button);
			append_dev(div0, t16);
			append_dev(div0, map_component);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*submitLocation*/ ctx[7], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$content*/ 8 && map_component_callback_value !== (map_component_callback_value = /*func*/ ctx[10])) {
				set_custom_element_data(map_component, "callback", map_component_callback_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			/*input0_binding*/ ctx[8](null);
			/*input1_binding*/ ctx[9](null);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(106:4) {#if $loaded==2}",
		ctx
	});

	return block;
}

// (105:0) {#key $loaded}
function create_key_block(ctx) {
	let if_block_anchor;
	let if_block = /*$loaded*/ ctx[2] == 2 && create_if_block(ctx);

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
			if (/*$loaded*/ ctx[2] == 2) {
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
		source: "(105:0) {#key $loaded}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let previous_key = /*$loaded*/ ctx[2];
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
			if (dirty & /*$loaded*/ 4 && safe_not_equal(previous_key, previous_key = /*$loaded*/ ctx[2])) {
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

function createPin(lat, lng) {
	let markerIcon = new L.Icon({
			iconUrl: '/img/common/markers/marker-black.png',
			shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
			iconSize: [25, 41],
			iconAnchor: [12, 41],
			popupAnchor: [1, -34],
			shadowSize: [41, 41]
		});

	return L.marker([lat, lng], { icon: markerIcon });
}

function updatePin(marker, lat, lng) {
	let newLatLng = L.latLng(lat, lng); // Replace with the desired coordinates
	marker.setLatLng(newLatLng);
}

function instance($$self, $$props, $$invalidate) {
	let $loaded;
	let $content;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('groups-add-component', slots, []);
	let loaded = writable(0);
	validate_store(loaded, 'loaded');
	component_subscribe($$self, loaded, value => $$invalidate(2, $loaded = value));
	let content = writable({});
	validate_store(content, 'content');
	component_subscribe($$self, content, value => $$invalidate(3, $content = value));
	let addressInput;
	let contactInput;
	let addressVec;
	let userPinLat = 0;
	let userPinLng = 0;
	let userPin = createPin(0, 0);
	userPin.setOpacity(0);
	let locale = loadLocaleContent(content, "groups-component", loaded);
	loadLocaleContent(content, "countries", loaded);

	function reverseGeocode(latitude, longitude) {
		let url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=jsonv2`;

		let callback = response => {
			// Parse the response JSON
			response = JSON.parse(response);

			// Extract the address information from the response
			let address = response.address;

			let city = address.city || address.town || address.village || address.hamlet;
			let state = address.state;
			let country = address.country;
			let fullAddress = country;

			if (state != undefined) {
				fullAddress += ", " + state;
			} else {
				state = "";
			}

			if (city != undefined) {
				fullAddress += ", " + city;
			} else {
				city = "";
			}

			$$invalidate(0, addressInput.value = fullAddress, addressInput);
			addressVec = [country, state, city];
		};

		getData(url, callback);
	}

	function mapCallbackGroups(createMap, content) {
		let map = createMap([22, 0], 2);
		addMarkersGroups(map, content);
		userPin.addTo(map);

		map.on('click', function (event) {
			let lat = event.latlng.lat;
			let lng = event.latlng.lng;
			userPinLat = lat;
			userPinLng = lng;
			updatePin(userPin, lat, lng);
			userPin.setOpacity(1);
			reverseGeocode(lat, lng);
		});
	}

	function submitLocation() {
		if (addressVec != undefined) {
			let data = [...addressVec, userPinLat, userPinLng, contactInput.value];
			let url = "/" + locale + "/groups-add-post/";
			sendText(url, JSON.stringify(data));
		}
	}

	onMount(() => {
		
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<groups-add-component> was created with unknown prop '${key}'`);
	});

	function input0_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			addressInput = $$value;
			$$invalidate(0, addressInput);
		});
	}

	function input1_binding($$value) {
		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
			contactInput = $$value;
			$$invalidate(1, contactInput);
		});
	}

	const func = createMap => mapCallbackGroups(createMap, $content);

	$$self.$capture_state = () => ({
		onMount,
		writable,
		groupsByCountry,
		addMarkersGroups,
		loadLocaleContent,
		getData,
		sendText,
		loaded,
		content,
		addressInput,
		contactInput,
		addressVec,
		userPinLat,
		userPinLng,
		userPin,
		locale,
		createPin,
		updatePin,
		reverseGeocode,
		mapCallbackGroups,
		submitLocation,
		$loaded,
		$content
	});

	$$self.$inject_state = $$props => {
		if ('loaded' in $$props) $$invalidate(4, loaded = $$props.loaded);
		if ('content' in $$props) $$invalidate(5, content = $$props.content);
		if ('addressInput' in $$props) $$invalidate(0, addressInput = $$props.addressInput);
		if ('contactInput' in $$props) $$invalidate(1, contactInput = $$props.contactInput);
		if ('addressVec' in $$props) addressVec = $$props.addressVec;
		if ('userPinLat' in $$props) userPinLat = $$props.userPinLat;
		if ('userPinLng' in $$props) userPinLng = $$props.userPinLng;
		if ('userPin' in $$props) userPin = $$props.userPin;
		if ('locale' in $$props) locale = $$props.locale;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		addressInput,
		contactInput,
		$loaded,
		$content,
		loaded,
		content,
		mapCallbackGroups,
		submitLocation,
		input0_binding,
		input1_binding,
		func
	];
}

class Groups_add_component extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>@import '/css/common.css';ol li{margin-left:3rem}label{display:inline-block;font-family:var(--serif,serif);font-size:1.15rem;line-height:160%;color:#222222;width:5.5rem}input{font-size:1.15rem;font-family:var(--serif,serif);height:2.5rem}#address-input{margin-top:2rem;margin-bottom:1rem;width:min(30rem,calc(100% - 10rem))}#contact-input{width:min(20rem,calc(100% - 10rem))}.description{margin-bottom:1rem}#submit-button{display:block;margin-top:2rem;margin-bottom:2rem;padding:1rem 2rem;font-size:1.4rem;font-family:var(--sans-serif,sans-serif);border:0rem solid black;border-radius:0.5rem;background:#cb1816;color:white}#groups-img{position:absolute;width:14rem;left:50%;transform:translate(-50%);z-index:0;opacity:0.2}#text-container>:nth-child(3){margin-top:8rem}#map{--height:30rem;--width:100%;--margin-bottom:0.5rem}#text-container{position:relative;max-width:calc(100vw - 4rem);margin:auto}h1{margin-bottom:1rem;font-size:2.2rem;text-align:center}#container{margin:auto;max-width:800px;margin-top:1rem;margin-bottom:4rem}#container p{text-align:justify}</style>`;

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

customElements.define("groups-add-component", Groups_add_component);

export { Groups_add_component as default };
