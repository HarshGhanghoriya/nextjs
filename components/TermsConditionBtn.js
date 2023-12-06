import Link from "next/link";

const TermsConditionBtn = ({ checkedPolicy, isChecked }) => {
  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={checkedPolicy} />
      <label htmlFor="terms">
        <span className="ml-2  underline ">
          <Link href={"/terms-and-conditions"} passHref={true}>
            Terms and Conditions
          </Link>
        </span>
      </label>
    </div>
  );
};

export default TermsConditionBtn;
