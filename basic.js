const assert = require('assert')

describe('hugendubel.de page', async () => {
	
	it('should hugendubel open', async () => {
		await browser.url('https://www.hugendubel.de');
		
	})

	
	xit('should accept-all button clicked', async () => {
		const acceptAll = await $('.sc-ezzafa.dvHFX')
		await acceptAll.click()
		//await browser.pause(5000)
	})
	
	it('should looking for EAN9783453201569', async () => {
		let input = await $('#mainSearchInput')
		await input.addValue('EAN')
		await input.addValue('9783453201569')
		
		value = await input.getValue()
		assert(value === 'EAN9783453201569') //true
	})
	
	it('should button search clicked', async () => {
		const mainSearchSubmit = await $('#mainSearchSubmit')
		await mainSearchSubmit.click()
		//await browser.pause(5000)
	})
	
	it('should bag button clicked', async () => {
		const bagButton = await $('.bagButton')
		await bagButton.click()
		//await browser.pause(5000)
	})
	
	xit('should fancybox close', async () => {
		const fancyboxClose = await $('.fancybox-close')
		await fancyboxClose.click()
		//await browser.pause(5000)
	})
	
	xit('should shopping cart open', async () => {
		const shoppingCart = await $('#header-cart')
		await shoppingCart.click()
		await browser.pause(7000)
	})

	it('should shopping cart open', async () => {
		await browser.url('https://www.hugendubel.de/de/shoppingcart');
		
	})
	
})
