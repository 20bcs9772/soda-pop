import React, { useState } from 'react';
import { ShoppingCart, X, Trash2 } from 'lucide-react';

const drinks = [
  { id: 'A1', name: 'Dirty Coke', color: '#5d4037', img: '/menu/coke.png', flavor: 'Classic Coke with coconut cream & lime', price: '$4.50', popular: true },
  { id: 'A2', name: 'Strawberry Cream', color: '#e91e63', img: '/menu/strawberry.png', flavor: 'Coke with strawberry syrup & vanilla cream', price: '$4.75' },
  { id: 'A3', name: 'Michelada', color: '#c62828', img: '/menu/michelada.png', flavor: 'Spicy michelada with lime, clamato & tajín', price: '$5.25' },
  { id: 'A4', name: 'Ice Tea', color: '#8d6e63', img: '/menu/ice-tea.png', flavor: 'Sweet iced tea with peach & lemon', price: '$4.25' },
  { id: 'B1', name: 'Guava Fizz', color: '#e65100', img: '/menu/guava.png', flavor: 'Guava nectar with lime & sparkling finish', price: '$4.75' },
  { id: 'B2', name: 'Mango Tango', color: '#ff9800', img: '/menu/mango.png', flavor: 'Tropical mango with coconut & cream', price: '$4.99' },
  { id: 'B3', name: 'Pineapple Paradise', color: '#f9a825', img: '/menu/pineapple.png', flavor: 'Pineapple soda with coconut & cherry', price: '$4.50' },
  { id: 'B4', name: 'Blueberry Blast', color: '#4527a0', img: '/menu/blueberry.png', flavor: 'Blueberry soda with cream & lime', price: '$4.25' },
];

type Drink = (typeof drinks)[number];
type CartItem = Drink & { cartId: string };

function parsePrice(priceStr: string): number {
  const match = priceStr.replace(/[^0-9.]/g, '');
  return parseFloat(match) || 0;
}

export default function VendingMachine() {
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(drinks[0]);
  const [dispensing, setDispensing] = useState<string | null>(null);
  const [dispensedDrink, setDispensedDrink] = useState<Drink | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleSelect = (drink: Drink) => {
    if (dispensing) return;
    setSelectedDrink(drink);
  };

  const handleAddToCart = () => {
    if (!selectedDrink || dispensing) return;
    setDispensing(selectedDrink.id);
    setDispensedDrink(null);
    setTimeout(() => {
      setDispensing(null);
      setDispensedDrink(selectedDrink);
    }, 1500);
    setTimeout(() => {
      setCart((c) => [...c, { ...selectedDrink, cartId: `${selectedDrink.id}-${Date.now()}` }]);
      setDispensedDrink(null);
    }, 2300);
  };

  const removeFromCart = (cartId: string) => {
    setCart((c) => c.filter((item) => item.cartId !== cartId));
  };

  const cartTotal = cart.reduce((sum, item) => sum + parsePrice(item.price), 0);
  const totalFormatted = `$${cartTotal.toFixed(2)}`;

  const handleCartButtonClick = () => {
    if (cart.length === 0) {
      document.getElementById('vending-machine')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setCartOpen(true);
    }
  };

  return (
    <section id="vending-machine" className="relative w-full py-[100px] bg-[var(--color-bg)] flex flex-col items-center justify-center overflow-hidden border-y-4 border-[var(--color-primary)]">
      {/* Light pattern background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 0 0, rgba(34,34,34,0.35) 0, transparent 55%), radial-gradient(circle at 100% 0, rgba(230,57,53,0.25) 0, transparent 55%), radial-gradient(circle at 0 100%, rgba(185,251,90,0.25) 0, transparent 55%)',
        }}
      />
      <div className="max-w-[1200px] w-full mx-auto px-[48px] max-[900px]:px-[24px] max-[600px]:px-[12px] relative z-10 flex flex-col items-center">
        {/* Background Text */}
        <div className="absolute top-[-50px] max-[600px]:top-[-30px] left-1/2 -translate-x-1/2 z-0 pointer-events-none">
          <span className="font-display text-[150px] min-[901px]:text-[250px] max-[600px]:text-[100px] max-[400px]:text-[80px] text-[var(--color-bg-muted)] leading-[0.8] whitespace-nowrap select-none tracking-normal">
            MENU
          </span>
        </div>
        <h2 className="font-display  mb-[64px] text-[80px] max-[900px]:text-[60px] max-[600px]:text-[40px] text-[var(--color-primary)] uppercase leading-none tracking-normal font-bold  text-center relative z-10">
          CHOOSE YOUR FLAVOR
        </h2>
        {/* Vending Machine */}
        <div className="relative mt-12 w-full max-w-[1000px] bg-[var(--color-vending-red)] border-4 border-[var(--color-primary)] rounded-[32px] p-[24px] min-[900px]:p-[48px] shadow-[16px_16px_0px_0px_rgba(34,34,34,1)] flex flex-col z-10">

          {/* Top Branding Panel */}
          <div className="w-full bg-[var(--color-bg-muted)] rounded-[16px] p-4 mb-[32px] flex items-center justify-center relative overflow-hidden border-4 border-[var(--color-primary)] shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]">
            <h3 className="font-display text-[40px] min-[900px]:text-[56px] text-[var(--color-vending-red)] uppercase tracking-widest relative z-10 m-0 leading-none">
              DIRTY SODA CO.
            </h3>
          </div>

          <div className="flex flex-col min-[900px]:flex-row gap-[48px] w-full">
            {/* Glass Front (Drinks) */}
            <div className="flex-[2] bg-white border-4 border-[var(--color-primary)] rounded-[24px] p-[24px] min-[900px]:p-[32px] relative overflow-hidden shadow-inner flex flex-col justify-center">
              {/* Glare effect */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"></div>
              {/* Shelves */}
              <div className="flex flex-col gap-[48px] relative z-10">
                {/* Row 1 */}
                <div className="relative w-full border-b-[16px] border-[var(--color-bg-light)] pb-[16px] grid grid-cols-4 justify-items-center items-end h-[240px]">
                  {/* Shelf depth effect */}
                  <div className="absolute bottom-[-16px] left-0 w-full h-[16px] bg-[var(--color-bg-light)] rounded-b-[4px]"></div>
                  {drinks.slice(0, 4).map((drink) => (
                    <div key={drink.id} className="flex flex-col items-center justify-end h-full gap-[12px] relative group cursor-pointer" onClick={() => handleSelect(drink)}>
                      {/* Drink Can/Cup */}
                      <div className={`w-[80px] h-[160px] min-[600px]:w-[120px] min-[600px]:h-[220px] relative overflow-hidden transition-all duration-300 group-hover:-translate-y-2 ${selectedDrink?.id === drink.id ? 'ring-2 ring-[var(--color-accent-lime)]' : ''} ${dispensing === drink.id ? 'animate-fall' : ''}`}>
                        <img src={drink.img} alt={drink.name} className="w-full h-full object-contain" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="relative w-full border-b-[16px] border-[var(--color-bg-light)] pb-[16px] grid grid-cols-4 justify-items-center items-end h-[240px]">
                  {/* Shelf depth effect */}
                  <div className="absolute bottom-[-16px] left-0 w-full h-[16px] bg-[var(--color-bg-light)] rounded-b-[4px]"></div>
                  {drinks.slice(4, 8).map((drink) => (
                    <div key={drink.id} className="flex flex-col items-center justify-end h-full gap-[12px] relative group cursor-pointer" onClick={() => handleSelect(drink)}>
                      {/* Drink Can/Cup */}
                      <div className={`w-[80px] h-[160px] min-[600px]:w-[120px] min-[600px]:h-[220px] relative overflow-hidden transition-all duration-300 group-hover:-translate-y-2 ${selectedDrink?.id === drink.id ? 'ring-2 ring-[var(--color-accent-lime)]' : ''} ${dispensing === drink.id ? 'animate-fall' : ''}`}>
                        <img src={drink.img} alt={drink.name} className="w-full h-full object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Control Panel — min-height matches drinks column so machine height stays fixed */}
            <div className="flex-1 min-[900px]:max-w-[300px] flex flex-col gap-[24px] min-[900px]:min-h-[560px]">
              {/* Screen */}
              <div className="w-full h-[80px] bg-[var(--color-primary)] border-4 border-[var(--color-primary)] rounded-[16px] flex items-center justify-center p-[12px] shadow-inner">
                <span className="font-mono text-[var(--color-accent-lime)] text-[24px] text-center leading-none font-bold">
                  {dispensing ? 'VENDING...' : selectedDrink ? selectedDrink.name : 'SELECT DRINK'}
                </span>
              </div>

              {/* Details Panel — fixed min-height so layout doesn't jump when selecting */}
              <div className="flex-1 min-h-[320px] bg-white border-4 border-[var(--color-primary)] rounded-[16px] p-[20px] flex flex-col shadow-[4px_4px_0px_0px_rgba(34,34,34,1)]">
                {selectedDrink ? (
                  <div className="flex flex-col h-full min-h-0 animate-in fade-in zoom-in duration-300">
                    <div className="flex flex-col mb-[12px]">
                      <div className="flex justify-between items-start mb-[4px]">
                        <h3 className="font-display text-[28px] text-[var(--color-primary)] leading-none uppercase">{selectedDrink.name}</h3>
                        <span className="font-mono font-bold text-[18px] text-[var(--color-vending-red)]">{selectedDrink.price}</span>
                      </div>
                      {selectedDrink.popular && (
                        <div className="self-start bg-[var(--color-accent-yellow)] text-[var(--color-primary)] text-[10px] font-bold px-[8px] py-[2px] rounded-full border-2 border-[var(--color-primary)] shadow-[2px_2px_0px_0px_rgba(34,34,34,1)] uppercase tracking-wider">
                          Most Popular
                        </div>
                      )}
                    </div>
                    <div className="mb-[24px]">
                      <span className="inline-block bg-[var(--color-bg-light)] text-[var(--color-primary-light)] text-[12px] font-bold px-[8px] py-[4px] rounded-[4px] uppercase tracking-wider mb-[8px]">Flavor Profile</span>
                      <p className="font-sans text-[16px] text-[var(--color-primary-muted)] leading-snug">{selectedDrink.flavor}</p>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      disabled={!!dispensing}
                      className="mt-auto w-full bg-[var(--color-accent-lime)] hover:bg-[var(--color-accent-lime-hover)] disabled:bg-[var(--color-bg-light)] disabled:text-[var(--color-primary-subtle)] text-[var(--color-primary)] font-sans font-bold text-[18px] py-[16px] rounded-[12px] border-2 border-[var(--color-primary)] shadow-[0_4px_0_rgba(34,34,34,1)] active:shadow-[0_0px_0_rgba(34,34,34,1)] active:translate-y-[4px] transition-all uppercase tracking-wide flex items-center justify-center gap-2"
                    >
                      {dispensing ? (
                        'Dispensing...'
                      ) : (
                        <>
                          <ShoppingCart className="w-5 h-5" strokeWidth={2.5} />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center flex-1 min-h-[260px] text-center opacity-50">
                    <div className="w-[48px] h-[48px] border-4 border-[var(--color-primary)] rounded-full flex items-center justify-center mb-[16px]">
                      <span className="font-display text-[24px] text-[var(--color-primary)]">?</span>
                    </div>
                    <p className="font-sans font-bold text-[16px] text-[var(--color-primary)] uppercase">Select a drink<br />to view details</p>
                  </div>
                )}
              </div>

              {/* Dispense Slot */}
              <div className="w-full h-[160px] bg-[var(--color-bg-dark)] border-4 border-[var(--color-primary)] rounded-[16px] relative overflow-hidden flex items-end justify-center shadow-[inset_0_20px_20px_rgba(0,0,0,0.8)] mt-2">
                {/* Flap */}
                <div className="absolute top-0 left-0 w-full h-[40px] bg-[var(--color-primary)] border-b-2 border-[var(--color-primary-muted)] shadow-lg z-20 flex items-center justify-center">
                  <div className="w-[60%] h-[4px] bg-[var(--color-bg-dark)] rounded-full opacity-50"></div>
                </div>

                {dispensedDrink && (
                  <div className="w-[80px] h-[160px] min-[600px]:w-[90px] min-[600px]:h-[180px] relative overflow-hidden animate-pop-up z-10" title="Added to cart shortly">
                    <img src={dispensedDrink.img} alt={dispensedDrink.name} className="w-full h-full object-contain mt-8" />
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Floating Cart Button */}
      <button
        onClick={handleCartButtonClick}
        className="fixed bottom-8 right-8 z-50 w-[64px] h-[64px] rounded-[16px] bg-[var(--color-vending-red)] border-4 border-[var(--color-primary)] shadow-[6px_6px_0px_0px_rgba(34,34,34,1)] flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-transform"
        aria-label={cart.length > 0 ? 'Open cart' : 'Scroll to vending machine'}
      >
        <ShoppingCart className="w-8 h-8" strokeWidth={2.5} />
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[24px] h-6 px-1.5 rounded-full bg-[var(--color-accent-lime)] text-[var(--color-primary)] font-display font-bold text-[14px] flex items-center justify-center border-2 border-[var(--color-primary)] shadow-[2px_2px_0px_0px_rgba(34,34,34,1)]">
            {cart.length}
          </span>
        )}
      </button>

      {/* Slide-out Cart Panel Backdrop */}
      {cartOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 transition-opacity"
          onClick={() => setCartOpen(false)}
          aria-hidden
        />
      )}

      {/* Slide-out Cart Panel */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-[380px] bg-white border-l-4 border-[var(--color-primary)] shadow-[-8px_0_24px_rgba(0,0,0,0.15)] flex flex-col transition-transform duration-300 ease-out ${cartOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b-4 border-[var(--color-primary)]">
            <h3 className="font-display text-[28px] text-[var(--color-primary)] uppercase tracking-wide">
              YOUR CART
            </h3>
            <button
              onClick={() => setCartOpen(false)}
              className="w-10 h-10 rounded-[8px] border-2 border-[var(--color-primary)] flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-bg-light)] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center text-[var(--color-primary-muted)]">
                <ShoppingCart className="w-12 h-12 mb-4 opacity-50" />
                <p className="font-sans font-bold text-[16px] uppercase">Your cart is empty</p>
                <p className="font-sans text-[14px] mt-1">Add drinks from the vending machine</p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.cartId}
                  className="flex items-center gap-4 p-4 bg-white border-4 border-[var(--color-primary)] rounded-[12px] shadow-[4px_4px_0px_0px_rgba(34,34,34,1)]"
                >
                  <div
                    className="w-14 h-20 shrink-0 rounded-[8px] border-2 border-[var(--color-primary)] overflow-hidden"
                    style={{ backgroundColor: item.color }}
                  >
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-[20px] text-[var(--color-primary)] uppercase leading-tight">
                      {item.name}
                    </p>
                    <p className="font-sans font-bold text-[18px] text-[var(--color-primary)] mt-1">
                      {item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.cartId)}
                    className="shrink-0 w-10 h-10 rounded-[8px] border-2 border-[var(--color-primary)] flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-bg-light)] transition-colors"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 className="w-5 h-5" strokeWidth={2.5} />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Total & Checkout */}
          {cart.length > 0 && (
            <>
              <div className="border-t-4 border-[var(--color-primary)] p-4">
                <div className="flex justify-between items-center">
                  <span className="font-display text-[18px] text-[var(--color-primary)] uppercase">
                    Total
                  </span>
                  <span className="font-display text-[24px] text-[var(--color-primary)]">
                    {totalFormatted}
                  </span>
                </div>
              </div>
              <div className="p-4 pt-0">
                <button
                  className="w-full bg-[var(--color-accent-lime)] hover:bg-[var(--color-accent-lime-hover)] disabled:bg-[var(--color-bg-light)] disabled:text-[var(--color-primary-subtle)] text-[var(--color-primary)] font-sans font-bold text-[18px] py-[16px] rounded-[12px] border-2 border-[var(--color-primary)] shadow-[0_4px_0_rgba(34,34,34,1)] active:shadow-[0_0px_0_rgba(34,34,34,1)] active:translate-y-[4px] transition-all uppercase tracking-wide"
                  onClick={() => { }}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
