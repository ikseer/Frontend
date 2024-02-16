import CounterInput from './CounterInput';

export default function SpecialOffer() {
  return (
    <div className="flex">
      <p>Special Offer :</p>
      <div className="flex gap-x-2">
        <CounterInput />
        <CounterInput />
        <CounterInput />
        <CounterInput />
      </div>
      <p> Remains until the end of the offer.</p>
    </div>
  );
}
